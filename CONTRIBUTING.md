### Commit Subjects

If your patch **changes the API or fixes a bug** please use one of the
following prefixes in your commit subject:

- `[fixed] ...`
- `[changed] ...`
- `[added] ...`
- `[removed] ...`

That ensures the subject line of your commit makes it into the
auto-generated changelog. Do not use these tags if your change doesn't
fix a bug and doesn't change the public API.

### Development

- `npm start` starts the development server (webpack-dev-server on port 8080).
- `npm build` builds a release and adds it to the dist folder.
- `npm test` runs unit tests.

## Generate changelog

Run from project folder:

    git tag -a v0.1.0 -m 'Version 0.1.0'   
    git commit lib/remo.jsx -m "[added] I did stuff.."
    ./node_modules/.bin/changelog -t v0.1.0     
