var html = require('bel')
var clock = require('./index')

document.body.appendChild(html`
  <div>
    ${clock().render()}
  </div>
`)
