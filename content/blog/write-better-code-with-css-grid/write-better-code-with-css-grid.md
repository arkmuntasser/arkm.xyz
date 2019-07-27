---
title: Write Better Code with CSS Grid
path: /write-better-code-with-css-grid
date: 2018-02-11
tags: css grid, layout, design, clean code, html
---

What if you could write less code, more semantic code, and more refactor-able code with one weird trick?

Well, there’s no trick, but there is CSS Grid! And while it’s not a trick it is magical in what it empowers us to do.

<!-- embed -->

Consider this widget.

Nothing special; we’ve seen designs like this countless times on the web. If we look under the hood at the HTML you’ll likely see something this.

```html
<div class="highlights">
  <div class="row">
    <div class="columns large-8">
      <div class="row">
        <div class="columns large-6">
          <div class="item">
            <img src="https://placehold.it/800x500" alt="image" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div class="columns large-6">
          <div class="item">
            <img src="https://placehold.it/800x500" alt="image" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="columns large-4">
      <div class="item">
        <img src="https://placehold.it/800x500" alt="image" />
        <h3>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="columns large-8">
      <div class="item">
        <img src="https://placehold.it/800x500" alt="image" />
        <h3>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="columns large-4">
      <div class="item">
        <img src="https://placehold.it/800x500" alt="image" />
        <h3>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</div>
```

here’s a lot of divs and a lot of classes and underlying all that is a bunch of float-based CSS.

This works! But it’s messy. It’s complicated. It’s hard to read. And there’s design work baked right into the structure; what if you need to completely restyle this widget?

HTML should be expressive. You should be able look at the HTML and get an immediate understanding of the type of content you’re dealing with. Not only should you understand, but so should a screen reader. Accessibility is something we should always be thinking about when we build something.

So how should we restructure this HTML? Well, if we think about it, it’s really just a list. A collection of related content. So let’s shove it in a ul.

```html
<ul class="highlights">
  <li>
    <div class="item">
      <img src="https://placehold.it/800x500" alt="image" />
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </li>
  <li>
    <div class="item">
      <img src="https://placehold.it/800x500" alt="image" />
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </li>
  <li>
    <div class="item">
      <img src="https://placehold.it/800x500" alt="image" />
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </li>
  <li>
    <div class="item">
      <img src="https://placehold.it/800x500" alt="image" />
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </li>
  <li>
    <div class="item">
      <img src="https://placehold.it/800x500" alt="image" />
      <h3>Lorem Ipsum</h3>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </li>
</ul>
```

Doesn’t that look nicer? So much easier to read and the focus is all on the content.

Now we just need to style it. Designs like this used to be very hard to do and necessitated the use of a framework like Booststrap or Foundation, but now are extremely easy with CSS Grid.

```css
.highlights {
  display: grid;
  grid-template-columns: 5fr 5fr 4fr;
  grid-template-rows: repeat(6, 7vw);
  grid-gap: 1rem;
  padding: 1rem;
  list-style: none;
}

.highlights li {
  grid-column: span 1;
  grid-row: span 3;
}

.highlights li:nth-child(3) { grid-row: span 1; }
.highlights li:nth-child(4) { grid-row: span 2; }
.highlights li:nth-child(5) { grid-column: span 2; }
```

With just a few lines of CSS we were able to fully recreate the original design. Less, but more expressive HTML. And much less CSS. It’s simple, clean, and easy for anyone to understand and maintain.

And because we’re not making any design determinations in the HTML, we can restyle it indefinitely!

With just a couple changes in the CSS we can get this.

<!-- embed -->

Or this.

<!-- embed -->

Or even this.

<!-- embed -->

In each case, we never altered the HTML. This is the power of CSS Grid.

Simpler. Faster. Cleaner. Semantic. Endlessly re-styleable.

Start using CSS Grid today.
