import { createLayer as LayerCreateLayer } from './layer'


/**
* 创建图层
* @param {String|Number} id 
* @param {Object} options 
*/
function createLayer(options) {
  let layers = this.layers
  window.layers = layers
  let id = options.id
  let layer
  if (!id) {
    throw new Error('Map createLayer: must give an id')
  }
  if (layers[id]) {
    throw new Error(`Map createLayer: layer ${id} exist`)
  }

  this.layers[id] = layer = LayerCreateLayer(options)
  this.map.addLayer(layer._layer)
  return layer
}

/**
 * 删除图层
 * @param {String|Number} id 
 */
function removeLayer(id) {
  let layer = this.layers[id]
  if (!layer) {
    console.log(`Map removeLayer: layer ${id} is not exist`)
  }
  layer.destory()
  delete this.layers[id]
}

/**
 * 删除所有图层
 */
function removeAllLayer() {
  let layers = this.layers
  for (let id in layers) {
    this.removeLayer(id)
  }
}

export default function (fn, Map) {
  fn.createLayer = createLayer
  fn.removeLayer = removeLayer
  fn.removeAllLayer = removeAllLayer
}