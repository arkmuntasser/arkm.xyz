---
template: post
title: Making Accessible Drop Caps
date: 2020-03-07
tags:
  - accessibility
  - html
  - drop caps
---

Drop caps can present a unique challenge for accessibility. It may seem like a simple enough design feature to implement on a site, but given that the [CSS for actual drop cap support](https://developer.mozilla.org/en-US/docs/Web/CSS/initial-letter) is presently only implemented in Safari we have to get a bit hacky.

Consider the following design I recently implemented for a client.

![screenshot](screenshot.png)

The outline styling you see here had been used through out the site, so I already knew how I was going to be tackling that. To produce that effect, I used this CSS:

```css
.outlined {
	-webkit-text-stroke: 1px #46348A;
	color: transparent;
}
```

I'll start by saying that I'm not totally pleased with this solution as it seems to result in slightly fuzzy text. Ideally, I would have prefered if the font family had a style that was an outline or if I could have had SVGs that would have been good too. But with the time constraints of the project this was what I had to do.

With that in place, I had to figure out how I was going to style the first letter of the first paragraph. My first attempt was to do this:

```css
p:first-child:first-letter {
	-webkit-text-stroke: 1px #46348A;
	color: transparent;
}
```

But that didn't work. Turns out that `-webkit-text-stroke` doesn't play well with pseudo-selectors. Which meant I needed to apply the stroke to an element that had just the first letter which in turn means I needed to modify the HTML coming out of the CMS.

```html
<!-- How the HTML initially came from the CMS -->
<p>Lorem ipsum dolor sit amet.</p>

<!-- The HTML post-modification -->
<p><span class="outlined">L</span>orem ipsum dolor sit amet.</P>
```

Now I could style the firslt letter directly and I was able to get the desired look. Success!

Except it's totally inaccessible. For anyone using a screen-reader to read the page will hear "L-orem" instead of "Lorem". To rememdy this we're going to need a bit more HTML and some ARIA attributes.

```html
<p>
	<span class="first-word">
		<span class="sr-only">Lorem</span>
		<span aria-hidden="true">
			<span class="outlined">L</span>orem
		</span>
	</span>
	ipsum dolor sit amet.
</p>
```

Let's break this down.

Instead of grabbing just the first letter, I'm now grabbing the entire first word because that's what we're breaking for assistive technologies. We then put the word in an unbroken state with the class of `sr-only` which hides it visually, but still makes it availed to be read by screen readers. That solves screen readers speaking the word properly.

Next we add the first word again with the first letter separated out as we had previously done, but the add `aria-hidden="true"` to the entire word. This creates a word the visual treatment we're looking for, but hides it from screen readers.

Accessibility is paramount when building on the web and seemingly simple things like drop caps can be an accessibility foot-gun.