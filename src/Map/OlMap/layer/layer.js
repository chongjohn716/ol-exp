import consts from './consts'

const ol = window.ol

/**
 * 图层构造函数
 * @param {Map} map 
 * @param {Object} options 
 *        id:
 *        style: 
 *        type:
 *        visible:
 */
class Layer {
  constructor(options) {
    this.init(options)
  }

  init({ id, type, style, visible, zIndex, autoClear = true }) {
    this.id = id
    this.style = style
    this.type = type
    this.autoClear = autoClear
    style && (this.olStyle = Layer.createStyle(style))
    this._source = new ol.source.Vector({
      features: []
    })
    this._layer = new ol.layer.Vector({
      source: this._source,
      style: this.olStyle,
      zIndex,
      visible
    })
  }

  draw(data) {
    this.autoClear && this.clear()
    this._source.addFeatures(this._createFeatures(data))
  }

  remove(id) {
    this._source.removeFeature(this._getFeature(id))
  }

  clear() {
    this._source.clear()
  }

  setStyleById(id, style) {
    let feature = this._getFeature(id)
    feature.setStyle(style)
  }

  destroy() { }

  setVisible(visible) {
    this._layer.setVisible(visible)
  }

  _getFeature(id) {
    return this._source.getFeatureById(id)
  }

  _createFeatures(data) {
    return data.map((item, index) => this._createFeature(item, index))
  }

  _createFeature(data, index) {
    let feature = new ol.Feature({
      geometry: this._createGeometry(data),
      data: data,
      name: data.name,
      id: index
    })

    feature.data = data
    data.style && feature.setStyle(createStyle(data.style))
    return feature
  }

  _createGeometry(p) {
    return null
  }
}

Layer.consts = consts

// const defaultLabelStyle = ''
function createStyle({
  fill = 'rgba(0, 0, 255, 0.1)',
  strokeColor = 'blue',
  strokeWidth = 2,
  text = '1'
}) {
  return new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: strokeColor,
      width: strokeWidth,
    }),
    fill: new ol.style.Fill({
      color: fill
    }),
    text: text && new ol.style.Text({
      text: text,
      overflow: true,
      placement: 'point',
      textAlign: 'center',
      fill: new ol.style.Fill({
        color: '#fff'
      })
    })
  })
}

// dash stroke style 
// lineCap: 'butt',
// lineDash: [2, 2]

export default Layer