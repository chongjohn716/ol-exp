import Layer from './layer'
// import { debug } from 'util';

let ol = window.ol

const styleCache = {};
function styleFn(feature) {
  const size = feature.get('features').length
  let style = styleCache[size];
  if (!style) {
    style = new ol.style.Style({
      image: new ol.style.Circle({
        radius: 10,
        stroke: new ol.style.Stroke({
          color: '#fff'
        }),
        fill: new ol.style.Fill({
          color: '#3399CC'
        })
      }),
      text: new ol.style.Text({
        text: size.toString(),
        fill: new ol.style.Fill({
          color: '#fff'
        })
      })
    });
    styleCache[size] = style;
  }
  return style;
}

class PointLayer extends Layer {
  _createGeometry({ lng, lat }) {
    return new ol.geom.Point([lng, lat])
  }

  _createLayer(zIndex, visible) {
    let source = this._source
    let style = this.olStyle

    // TODO: 悬浮或者点击时展开聚簇
    if (this.options.cluster) {
      source = new ol.source.Cluster({
        distance: 40,
        source
      })

      style = styleFn
    }

    return new ol.layer.Vector({
      source,
      style,
      zIndex,
      visible
    })
  }
}

export default PointLayer
