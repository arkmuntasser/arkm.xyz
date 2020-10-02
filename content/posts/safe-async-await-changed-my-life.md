---
template: post
title: This one weird trick changed my whole async/await game
date: 2020-10-01
tags:
  - async
  - await
	- javascript
	- es6
---

Hello

```js
async function call(promise) {
	let data, error;
	try {
		const res = await promise;
		data = await res.json();
	} catch (err) {
		error = err;
	}
	return [data, error];
}
```
