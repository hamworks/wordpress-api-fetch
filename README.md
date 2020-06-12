# @hamworks/wordpress-api-fetch

Customized [@wordpress/api-fetch](https://developer.wordpress.org/block-editor/packages/packages-api-fetch/) 

use `globalThis.fetch` .

## Installation

Install the module

```bash
npm install @hamworks/wordpress-api-fetch --save
```

## Usage

```js
import apiFetch from '@team-hamworks/wordpress-api-fetch';

// GET
let posts = await apiFetch( { path: '/wp/v2/posts' } )
console.log( posts )

// POST
let posts = await apiFetch( {
	path: '/wp/v2/posts/1',
	method: 'POST',
	data: { title: 'New Post Title' },
} )
console.log( posts )
```


### ES Modules

```js
import apiFetch from 'https://cdn.pika.dev/@hamworks/wordpress-api-fetch';
const posts = await apiFetch( { path: '/wp/v2/posts' } )
console.log( posts )
```

## Middlewares

### fetchAllInParallelMiddleware

A modification of [fetchAllMiddleware](https://github.com/WordPress/gutenberg/blob/master/packages/api-fetch/src/middlewares/fetch-all-middleware.js)  to perform requests in parallel.

```js
import apiFetch from 'https://cdn.pika.dev/@hamworks/wordpress-api-fetch';
apiFetch.use( apiFetch.fetchAllInParallelMiddleware );
const posts = await apiFetch( { path: '/wp/v2/posts?per_page=-1' }, { mode: 'cors'} );
console.log(posts);
```
