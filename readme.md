# My website

[See it in action!](https://nicklausw.com)

## What's it use?
Lots of small stuff.
- [react-static brings everything together.](https://github.com/react-static/react-static)
- [Bulma makes CSS bearable.](https://bulma.io/)
- [PurgeCSS makes Bulma small.](https://purgecss.com/)
- [react-snap makes meta tags work.](https://github.com/stereobooster/react-snap)

## How do I work with it?
Install [Python 3](https://www.python.org/) and [Node.JS](https://nodejs.org/en/) then run:
~~~
git clone https://github.com/nicklausw/mysite.git
cd mysite
npm install
npm install -g purgecss react-snap react-static
~~~
From there, you'll either want to execute `test.py` or `build.py`. `blog.py` builds the blog and is run automatically by the other scripts.