---
title: How to Improve Dropdown Navigation with Animation
path: /how-to-improve-dropdown-navigation-with-animation
date: 2017-12-27
tags: animation, css, navigation, html
---

Navs! Websites need them, you have to build them, and typically they blow.

Often, nav looks something like the one below. It’s a simple nav that when you hover over an item a dropdown appears. It works well enough, but the problem comes in when I try to move the mouse in a diagonal to a sub-item on the left or right. This deactivates the hover and makes the dropdown disappear. I am forced to move in rigid straight lines that are completely unnatural.

<!-- embed -->

Luckily, this is easily solved. We could use some JS, but I’m personally all about stuntin’ with CSS. We can get the desired effect with just 3 additional CSS rules.

Why does this work? What I want, really, is a hover-able triangle going from the top corner of the triggering item in the nav to the top corner of the dropdown.

<!-- embed -->

But triangles are hard to make a I would definitely need to use JS to give it the right dimensions and place it properly. Instead of a real triangle, we create the effect of a triangle.

On hover we create a rectangle that fills the main nav area. Once we hover off the trigger item, in this case an a tag, we set a transition and scale the rectangle down to 0. This means that as we move to the left or right the rectangle is getting shorter over time. If we want to stay within the coverable area then we need to move the mouse in a diagonal fashion. This gives us a triangle to move in.

<!-- embed -->

This has a number of advantages.

First, since this is bound by time that means I can simply move my mouse to the right to a sibling nav item and actually interact with that nav item.

Second, it’s extremely simple to add to nearly any existing nav without much effort.

Third, there’s no additional JS to load or burden the user with, it’s just 3 more short CSS rules.

Here’s the final product.

<!-- embed -->

A designer at my work challenged me to find a simple solution for this problem. This is not a solution I’ve seen elsewhere. Most other nav solved it having the dropdown work on click rather than hover, they only had top-level nav items, or they had a bunch of nasty looking JS to achieve the same effect.

I wanted something that was as low impact to the user and developer as possible and I thought it would be fun to solve in pure CSS. You can see this working on a couple of my sites already: Visit Rhode Island and Visit New Orleans.

If you want to play with solution more, I have them up on Glitch. I have the “broken” version I use to challenge and train my devs and the “answer key”version as well.
