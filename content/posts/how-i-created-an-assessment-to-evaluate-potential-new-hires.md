---
template: post
title: How I Created an Assessment to Evaluate Potential New Hires
date: 2018-11-10
tags:
  - culture
  - hiring
redirect_from:
  - /how-i-created-an-assessment-to-evaluate-potential-new-hires/
---

Earlier this year I was tasked with developing a method of evaluating developer skill for potential new hires. We have an unofficial no whiteboard-ing policy so previously we relied on resumes, referral, and interviews to measure our candidates. While this almost always resulted in a great cultural fit, it was a crapshoot how skilled the developer would actually be. This would often result in us hiring less experienced developers than we wanted and having to spend more time training.

Going into this I knew there were a few things this methodology, whatever it was going to be, needed to have:

1. It needed to be presentative of the actual work the candidate might do if hired.
2. It needed to test HTML, CSS, and JS skills equally.
3. It needed to allow for the candidate to use any method/technology they wanted.
4. It needed to test how well the candidate can follow direction.
5. It needed to be respectful of the candidate’s time.

With these requirements in place I began evaluating my options. I started with some pre-baked solutions like HackerRank which provide a number of quick tests spanning a variety of JavaScript topics and provides the test-taker a score they can provide to prospective employers. I found these options to generally be unhelpful as they didn’t meet many of my criteria. Next, I began exploring methods other companies were using.

> I would see resumes where the developer would refer to themselves as a React developer, but then opt to use jQuery instead.

An intriguing one, and one I had been subjected to in the past, was to receive a broken piece of code and to have to fix it. Upon fixing it, it would reveal that it was an application that enabled the candidate to submit their resume and formally apply for the job. The idea being that the only candidates applying would be ones who have already passed the test and demonstrated their debugging and development skills. I opted to not pursue this option as well. It seems like a good idea at first, but it doesn’t give me the flexibility to test CSS and HTML skills nor does it offer the candidate the ability to tackle the problem however they want. Ultimately, I was going to have to create my own solution.

In creating my solution I made sure to address each of the 5 requirements I outlined without exception.

1. **It needed to be presentative of the actual work the candidate might do if hired.**<br />
I found a widget on one the sites we made that had a deceptively simple looking layout. That candidate would be tasked with recreating this widget.

2. **It needed to test HTML, CSS, and JS skills equally.**<br />
Because of the nature of the layout it could be built using a grid from Bootstrap or Foundation (albeit with some finagling), but would most easily be built using CSS Grid. Additionally, the type of content in the widget lent itself to more semantic markup than just a bunch of divs. And finally, they would need to pull in data from an API to fill with the widget with content and there were toggle that would filter the content in the widget. CSS, HTML, JavaScript; check, check, check.

3. **It needed to allow for the candidate to use any method/technology they wanted.**<br />
I provided zero boilerplate code and offered no direction on how to tackle the construction of the widget. It can be built readily using ES6, jQuery, React, Vue or whatever the candidate wanted. They got to use what they were comfortable with.

4. **It needed to test how well the candidate can follow direction.**<br />
While I didn’t provide any direction regarding the code, I did provide screenshots and a video of how the widget should look and behave as well notes on the dimensions of various items. I also provided examples of how to use the provided test API. And finally, I gave instruction on the file/folder structure I wanted their solution in and how they should submit it for review.

5. **It needed to be respectful of the candidate’s time.**<br />
I set a 2 day limit on the assessment. It shouldn’t take 2 days for anyone to complete, but I understand that life happens and I don’t need to add additional stress that might needlessly result in the candidate turning in lower quality work. Additionally, the assessment would only be administered once the candidate was explained the 2 day timeframe and gave us notice of when they would be free to begin.

Having felt confident I had developed an assessment that met my criteria and would enable us to better evaluate or prospects I put it in effect. The results have been overwhelming positive! I would see resumes where the developer would refer to themselves as a React developer, but then opt to use jQuery instead. I could see if the candidate knows how to use CSS Grid or if they reach for a CSS framework. I got to see if their code suffers from div-itis. It opened up a world of conversation during interviews. It has empowered us to be much more selective with our hires and our first hire since using this assessment has had a dramatically smaller ramp-up period than pre-assessment hires. We’re now exploring improvements that can be made to the assessment and how we might be able to make different versions for different departments.

If you want to check out the assessment check out our [current open positions](https://www.simpleviewinc.com/careers/open-positions/) and apply. Or you could just [check out the GitHub repo](https://github.com/simpleviewinc/cms-dev-assessment).
