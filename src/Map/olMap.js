import OlMap from "../OlMap/index"
import polygons from '../data/polygons'
import lines from '../data/lines'
import points from '../data/points'

const map = new OlMap({
  center: [114.5435, 22.5439],
  zoom: 8
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
    zIndex: 10
  })
  layers.line.draw(lines)

  layers.line = map.createLayer({
    type: 'point',
    cluster: true,
    id: 'point',
    zIndex: 20
  })
  layers.line.draw(points)
}

export default map
