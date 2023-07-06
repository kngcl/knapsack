const test = document.querySelector('.add')
const load = document.querySelector('.reset')
const text = document.querySelector('.text')
const slct1 = document.getElementById('slct')
const capi = document.getElementById('capacity')
const done = document.querySelector('.done')
const totalW = document.querySelector('.weight')
const totalV = document.querySelector('.value')
const capa = document.querySelector('.capacity')
const knapSack = {
  capacity: 0,
  weight: 0,
  value: 0,
  item: []
}

const items = [
  { Name: 'Computer Science Subjects', weight: 20, values: 10 },
  { Name: 'Operating System', weight: 20, values: 10 },
  { Name: 'Computer Networks', weight: 20, values: 10 },
  { Name: 'Data Structure', weight: 20, values: 10 },
  { Name: 'Algorithm', weight: 20, values: 10 },
  { Name: 'C programming', weight: 20, values: 10 },
  { Name: 'JAVA', weight: 20, values: 10 }
]

let selectObject

load.onclick = function reload () {
  window.location.reload()
}

done.onclick = function disabled () {
  knapSack.capacity = capi.value
  capi.disabled = true
}

test.onclick = function knapSacks () {
  if (knapSack.capacity === 0) {
    alert('please enter the size basket')
  } else {
    for (let i = 0; i < items.length; i++) {
      if (slct1.value === items[i].Name) {
        selectObject = items[i]
        if (selectObject.weight + knapSack.weight <= knapSack.capacity) {
          knapSack.item.push(selectObject)
          knapSack.weight += selectObject.weight
          knapSack.value += selectObject.values
          text.innerHTML +=
            'Items:' +
            ' ' +
            selectObject.Name +
            '  |   ' +
            'Weight:' +
            '  ' +
            selectObject.weight +
            '  |   ' +
            'Value:' +
            '  ' +
            selectObject.values +
            '  ' +
            '<br>' +
            '<br>'

          slct1.remove(slct1.selectedIndex)
          totalW.innerHTML = 'Total_weight:' + ' ' + knapSack.weight
          totalV.innerHTML = 'Total_value:' + ' ' + knapSack.value
          capa.innerHTML = 'Capacity:' + ' ' + knapSack.capacity
        } else {
          alert('size exceeded')
        }
      }
    }
  }
}
