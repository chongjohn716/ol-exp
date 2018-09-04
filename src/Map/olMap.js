import OlMap from "../OlMap/index"
import polygons from '../data/polygons'
import lines from '../data/lines'
import points from '../data/points'

const map = new OlMap({
  center: [
    113.7141,
    23.043
  ],
  zoom: 10
})

let layers = {}

map.draw = function (params) {
  layers.polygon = map.createLayer({
    type: 'polygon',
    id: 'ploygon'
  })
  layers.polygon.draw(polygons)


  layers.line = map.createLayer({
    type: 'line',
    id: 'line',
    zIndex: 10,
    style: {
      color: '#fff'
    }
  })
  layers.line.draw(lines)

  layers.line = map.createLayer({
    type: 'point',
    // cluster: true,
    id: 'point',
    zIndex: 20,
    style: {
      radius: 6,
      strokeWidth: 2,
      fill: 'rgba(100%, 100%, 100%, 0.7)',
      color: '#0ff'
    }
  })
  layers.line.draw(points)

  layers.geojson = map.createLayer({
    type: 'geojson',
    // cluster: true,
    id: 'geojson',
    zIndex: 20,
    style: {
      radius: 6,
      strokeWidth: 2,
      fill: 'rgba(100%, 100%, 100%, 0.7)',
      color: '#0ff'
    }
  })

  // layers.line.draw('')
}

window.map = map

// map.onClick(function (e) {
//   console.log('click: ', e[0].map.getFeaturesAtPixel(e[0].pixel))
// })
// map.onPointermove(function (e) {
//   console.log('pointermove: ', e[0].map.getFeaturesAtPixel(e[0].pixel))
//   for (var i = 0; i < 1000; i++) {
//     console.log(i)
//   }
// })

export default map
