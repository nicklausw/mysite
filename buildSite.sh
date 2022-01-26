npm run build
cd dist
purgecss --content index.html about/index.html contact/index.html *.*.js templates/__react_static_root__/src/pages/*.*.js --css styles.*.css --output styles.*.css