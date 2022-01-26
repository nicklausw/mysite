# My website

[See it in action!](https://nicklausw.com)

Redone with react because why not. Created with react-static; uses bulma for css.

## bulma css bloat
Doing this after running `npm run build` to fix that for the time being:
```
cd dist
purgecss --content index.html about/index.html contact/index.html *.*.js templates/__react_static_root__/src/pages/*.*.js --css styles.0037c242.css --output styles.0037c242.css
```