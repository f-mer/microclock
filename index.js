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
    var time = new Date(component.state.time).toLocaleTimeString()

    return html`
      <span>${time}</span>
    `
  }

  function load () {
    this.timer = setInterval(function tick () {
      component.state.time = Date.now()
      component.emit('render')
    }, 1000)
  }

  function unload () {
    clearInterval(this.timer)
  }
}
