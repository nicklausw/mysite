export NODE_OPTIONS=--openssl-legacy-provider
npm run build
cd dist
purgecss --content index.html */index.html *.*.js templates/__react_static_root__/src/pages/*.*.js --css styles.*.css --output styles.*.css