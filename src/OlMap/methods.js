export default function (fn) {
  fn.setCenter = function (center) {
    this.view.setCenter(center)
  }

  fn.getCenter = function () {
    return this.view.getCenter()
  }

  fn.setZoom = function (zoom) {
    this.view.setZoom(zoom)
  }

  fn.getZoom = function () {
    return this.view.getZoom()
  }

  fn.animate = function (...rest) {
    let callback
    if (typeof rest[rest.length - 1] === 'function') {
      callback = rest.pop()
    }
    this.view.animate(...rest, callback)
  }
}