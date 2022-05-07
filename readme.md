# My website

[See it in action!](https://nicklausw.com)

## What's it use?
[React](https://reactjs.org/) with [Next.js](https://nextjs.org/).

## What's in the folders?
* [`blog`](blog) - blog posts in Markdown format.
* [`components`](components) - reused code in the website. Example: the site's header.
* [`pages`](pages) - actual website pages. These line up with the website's .html output.
* [`public`](public) - stuff that goes in the root of the website. Example: pictures and `.htaccess`.
* [`scripts`](scripts) - scripts **not** used by the website, like running PurgeCSS (part of the build process).
* [`styles`](styles) - all the website's SCSS.

## How do I work with it?
Install [Node.JS](https://nodejs.org/en/) then run:
~~~
git clone https://github.com/nicklausw/mysite.git
cd mysite
yarn install
yarn run dev # to test
yarn run build # to build
~~~