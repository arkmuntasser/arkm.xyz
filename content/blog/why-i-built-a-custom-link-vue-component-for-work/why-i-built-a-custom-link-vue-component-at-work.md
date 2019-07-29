---
title: Why I built a Custom Link Vue Component at Work
path: /why-i-built-a-custom-link-vue-component-at-work
date: 2019-01-04
tags: vue, links, anchors, components
---

I’ve been working on a component library at work for about 6 months now. I want to detail some of the work and thought that went into building these components.

When I first started drafting the needs for a component library I looked to what was clunky for our devs to handle to see if any opportunities to simplify presented themselves. I decided to start at one of the smallest building blocks for one of our sites: a link.

To begin I audited a number of sites to see what our links looked like and I noticed a few things:

* They were often missing title attributes.
* A proper target wasn’t always set.
* When opening links in a new tab we were never setting the rel to either nofollow or noopener.

We were failing to make our links accessible and we’re weren’t following best practices. The lighthouse scores weren’t pretty.

I then moved to exploring how the we stored link data in our CMS. As it turned out, in our templates we would get access to links as an object. This object contained the URL, the target and a title; we had everything we needed so that meant that devs were simply leaving things out when making links. I get it, we all get busy and sometimes we take shortcuts. This seemed like a perfect opportunity to build a new link component that could take the entire link object and build a proper link with the necessary attributes.

I ended up building something along these lines:

```html
<template>
    <a
        v-if="href"
        :href="href"
        :target="target"
        :title="title"
        :rel="rel"
    >
        <slot>read more</slot>
    </a>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    },
    computed: {
        href() {
            return this.link.url;
        },
        target() {
            return this.link.target ? this.link.target : '_self';
        },
        title() {
            return this.link.title;
        },
        rel() {
            return this.target === '_blank' ? 'noopener' : undefined;
        }
    }
}
</script>
```

With this, all the dev would need to do is pass along the link object via a prop to the component and everything would get handled automagically. This means the dev experience went from this:

```html
<a href="{{link.url}}">click me</a>
```

To this:

```html
<hyperlink :link="link">click me</hyperlink>
```

It’s roughly the same amount of effort but ensures that we aren’t missing out on easy accessibility or best practices wins.

And so the first component of our component library was made.

**Edit:**
Since working on this library and writing this post, we have decided to not continue adopting Vue at work. We love Vue, but other departments were using React and we ultimately decided that our department should not be the only one using Vue so we're moving to adopt React as well.
