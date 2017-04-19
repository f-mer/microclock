# microclock [![stability][0]][1]
[![build status][2]][3] [![js-standard-style][4]][5]

## Usage
```js
var html = require('bel')
var clock = require('./index')

document.body.appendChild(html`
  <div>
    ${clock().render()}
  </div>
`)
```

## See Also
- [yoshuawuyts/nanocomponent][mc]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/
[2]: https://img.shields.io/travis/f-mer/microclock/master.svg?style=flat-square
[3]: https://travis-ci.org/f-mer/microclock
[4]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[5]: https://github.com/feross/standard
[mc]: https://github.com/yoshuawuyts/microcomponent
