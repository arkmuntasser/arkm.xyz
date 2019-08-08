---
template: post
title: Write Better Code with CSS Grid
date: 2018-02-11
tags:
  - css grid
  - layout
  - design
  - clean code
  - html
redirect_from:
  - /write-better-code-with-css-grid/
  - /articles/post/laying-out-the-future-in-css-grid/321/
---

CSS Frameworks like Bootstrap, Foundation, and Bulma help us describe our HTML in terms of layout structure and components, but I'm not a fan of that approach.

I prefer an approach I learned from [Jen Simmons](https://www.youtube.com/watch?v=qNtJ5p3h2A4) where HTML is used to describe the actual content of the page. Layout doesn't ever factor into it. After all, it is *markup* so it should be used to add semantic meaning to your content. But aside from this philosphical interpretation there are other reasons to not bake layout into your HTML.

A big one is there are fewer `div`s cluttering up the DOM which can improve performance. And it also results in cleaner looking code since there are fewer utility-classes in the HTML (though this last one is subjective as frameworks like [Tailwind CSS](https://tailwindcss.com/) make a reasonable argument for more of these utility-classes in your HTML).

* [View Demo App](https://ui-playground-grid-demo.glitch.me/)
* [Download Source Code on GitHub](https://github.com/arkmuntasser/css-grid-demos)

## Prerequisites

* Working knowledge of [HTML and CSS](https://internetingishard.com/html-and-css/)
* Familiarity with [Responsive Web Development](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)

Let's consider this following layout:

![](https://res.cloudinary.com/arkmuntasser/image/upload/c_scale,f_auto,q_80,w_800/v1564885707/PixelSnap_2019-08-03_at_19.21.49_2x.png)

Using Foundation, I might write some HTML like this:

```html
<section class="articles">
  <div class="row">
    <div class="columns large-8">
      <div class="row">
        <div class="columns large-6">
          <article><!-- content --></article>
        </div>
        <div class="columns large-6">
          <article><!-- content --></article>
        </div>
      </div>
    </div>
    <div class="columns large-4">
      <article><!-- content --></article>
      <article><!-- content --></article>
    </div>
  </div>
  <div class="row">
    <div class="columns large-8">
      <article><!-- content --></article>
    </div>
    <div class="columns large-4">
      <article><!-- content --></article>
    </div>
  </div>
</section>
```

This is fine, but what is this thing? Really? It's just a list of articles, right? So shouldn't the HTML just look like this:

```html
<section class="articles">
  <article><!-- content --></article>
  <article><!-- content --></article>
  <article><!-- content --></article>
  <article><!-- content --></article>
  <article><!-- content --></article>
  <article><!-- content --></article>
</section>
```

That's a lot cleaner looking and a lot more descriptive of the content we have. But now that we've gotten rid of the layout, how do we add it back in? That's where CSS Grid comes in!

```css
.articles {
  display: grid;
  grid-template-columns: 5fr 5fr 4fr;
  grid-template-rows: repeat(6, 7vw);
  grid-gap: 1rem;
}

.articles article {
  grid-column: span 1;
  grid-row: span 3;
}

.articles article:nth-child(3) { grid-row: span 1; }
.articles article:nth-child(4) { grid-row: span 2; }
.articles article:nth-child(5) { grid-column: span 2; }
```

That's it! That's all the CSS that you need to recreate the layout. I find this to be far easier to read than the framework-based solution above.

So now we've cleaned up our HTML and more accurately and concisely describe the actual content we have and we we're able to move our layout logic into just a few lines of CSS. But we haven't even gotten to the best part!

Because we're now handling layout in the CSS, we can take our simplified HTML and display it nearly anyway that we want without altering it!

What if we change our CSS to this:

```css
.articles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(18, 6vw);
  list-style: none;
}

.articles article:nth-child(1) {
  grid-column: 1 / span 2;
  grid-row: 1 / span 3;
}
.articles article:nth-child(2) {
  grid-column: 2 / span 2;
  grid-row: 3 / span 3;
}
.articles article:nth-child(3) {
  grid-column: 1 / span 2;
  grid-row: 5 / span 3;
}
.articles article:nth-child(4) {
  grid-column: 2 / span 2;
  grid-row: 7 / span 3;
}
.articles article:nth-child(5) {
  grid-column: 1 / span 2;
  grid-row: 9 / span 3;
}
.articles article:nth-child(6) {
  grid-column: 2 / span 2;
  grid-row: 11 / span 3;
}
```

And get this:

![](https://res.cloudinary.com/arkmuntasser/image/upload/c_scale,f_auto,q_80,w_800/v1564885707/PixelSnap_2019-08-03_at_19.22.39_2x.png)

Or maybe we want something a little wilder?

```css
.articles {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 19vw);
}

.articles article {
  grid-column: span 1;
  grid-row: span 1;
}

.articles article:nth-child(2) { grid-column: 3; }
.articles article:nth-child(3) { grid-column: 5; }
.articles article:nth-child(4) { grid-column: 2; }
.articles article:nth-child(5) { grid-column: 4; }
.articles article:nth-child(6) { grid-column: 3; }
```

![](https://res.cloudinary.com/arkmuntasser/image/upload/c_scale,f_auto,q_80,w_800/v1564885707/PixelSnap_2019-08-03_at_19.23.33_2x.png)

Maybe something a bit more standard?

```css
.articles {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 2rem 1rem;
}

.articles article { height: 19vw; }
```

![](https://res.cloudinary.com/arkmuntasser/image/upload/c_scale,f_auto,q_80,w_800/v1564885708/PixelSnap_2019-08-03_at_19.24.07_2x.png)

Across all these layouts, there's only maybe 12 lines of CSS that's different. That's the power of CSS Grid and the power of moving layout out of the HTML.
