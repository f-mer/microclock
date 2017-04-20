var microcomponent = require('microcomponent')
var html = require('bel')

module.exports = clock

function clock () {
  var component = microcomponent({
    state: {
      time: Date.now()
    },
    pure: true
  })
  component.on('render', render)
  component.on('load', load)
  component.on('unload', unload)
  return component

  function render () {
    var time = new Date(this.state.time).toLocaleTimeString()

    return html`
      <span>${time}</span>
    `
  }

  function load () {
    var _this = this

    component.timer = setInterval(function tick () {
      _this.state.time = Date.now()
      _this.emit('render')
    }, 1000)
  }

  function unload () {
    clearInterval(this.timer)
  }
}
