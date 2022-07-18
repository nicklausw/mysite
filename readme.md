# My website

[See it in action!](https://nicklausw.com)

## What's it use?
[React](https://reactjs.org/) with [Next.js](https://nextjs.org/).

## What's in the folders?
* [`blog`](blog) - blog posts in Markdown format.
* [`components`](components) - React components. Example: the site header.
* [`pages`](pages) - actual website pages. These line up with the website's .html output.
* [`public`](public) - stuff that goes in the root of the website. Example: pictures and `.htaccess`.
* [`scripts`](scripts) - scripts that don't use JSX. Example: blog post data grabber.
* [`styles`](styles) - all the website's SCSS.

## How do I work with it?
Install [Node.JS](https://nodejs.org/en/) then run:
~~~
git clone https://github.com/nicklausw/mysite.git
cd mysite
npm install
npm run dev # to test
npm run build # to build
~~~