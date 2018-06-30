import init from './init'
// import initMethods from './methods'
import initLayer from './initLayer'
import initEvent from './initEvent'

function Map(option = {}) {
  this.option = option

  // this.init()
  this.init()
  if (!option.target) {
    return
  }
  this.render()
}

let fn = Map.prototype

fn.init = init

fn.render = function (target) {
  target = target || this.option.target
  let map = this.map
  map.setTarget(target)
  map.render()
}

// initMethods(fn, Map)
initLayer(fn, Map)
initEvent(fn, Map)

export default Map