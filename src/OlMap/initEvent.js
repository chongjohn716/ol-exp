// function bindEvent() {
//   let events = this.events = {
//     click
//     dblclick: [],
//     moveend: [],
//     movestart: [],
//     singleclick: [],
//     pointermove: []
//   }

//   for (let name in events) {
//     this.map.on(name, function (...rest) {
//       console.log(name, rest)
//       events[name].forEach(fn => {
//         fn.call(this, rest)
//       })
//     })
//   }
// }

let eventTypes = this.events = [
  'click',
  'dblclick',
  'moveend',
  'movestart',
  'singleclick',
  'pointermove'
]

function initialUppercase(name) {
  return name.slice(0, 1).toUpperCase() + name.slice(1)
}

function getEventName(name) {
  return 'on' + initialUppercase(name)
}

export default function (fn, map) {
  eventTypes.forEach(name => {
    fn[getEventName(name)] = function (fn) {
      if (!this.events[name]) {
        this.events[name] = []
        this.map.on(name, (...rest) => {
          this.events[name].forEach(fn => fn.call(this, rest))
        })
      }
      this.events[name].push(fn)
    }
  })
  // for (let name in events) {
  //   this.map.on(name, function (...rest) {
  //     console.log(name, rest)
  //     events[name].forEach(fn => {
  //       fn.call(this, rest)
  //     })
  //   })
  // }
}