# @team-hamworks/wordpress-api-fetch

> Customized [@wordpress/api-fetch](https://developer.wordpress.org/block-editor/packages/packages-api-fetch/) 



## Installation

Install the module

```bash
npm install @team-hamworks/wordpress-api-fetch --save
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
