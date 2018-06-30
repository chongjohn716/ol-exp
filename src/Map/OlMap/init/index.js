import initInteractions from './initInteractions'

let ol = window.ol

function createView({ center, zoom }) {
  return new ol.View({
    projection: 'EPSG:4326',
    center: center || [0, 0],
    zoom: zoom || 10
  })
}

function initProps(target) {
  target.layers = {}
  target.events = {}
  target.map = null
}

export default function () {
  let option = this.option
  if (this._inited) {
    return
  }
  this._inited = true
  initProps(this)

  let view = this.view = createView(option)
  let map = window.map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view,
    target: option.target
  })

  initInteractions(map)

  this.map = map
}
