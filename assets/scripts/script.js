var test = document.querySelector(".add");
var load = document.querySelector(".reset");
var text = document.querySelector(".text");
var slct1 = document.getElementById("slct");
var capi = document.getElementById("capacity");
var done = document.querySelector(".done");
var totalW = document.querySelector(".weight")
var totalV = document.querySelector(".value")
var capa = document.querySelector(".capacity")
let knapSack = {
  capacity: 0,
  weight: 0,
  value: 0,
  item: [],
};

let items = [
  { Name: "Computer Science Subjects", weight: 20, values: 10 },
  { Name: "Operating System", weight: 20, values: 10 },
  { Name: "Computer Networks", weight: 20, values: 10 },
  { Name: "Data Structure", weight: 20, values: 10 },
  { Name: "Algorithm", weight: 20, values: 10 },
  { Name: "C programming", weight: 20, values: 10 },
  { Name: "JAVA", weight: 20, values: 10 },
  (capacity = 0),
];

let total = 0;
let selectObject;

load.onclick = function reload() {
  window.location.reload();
};

done.onclick = function disabled() {
  knapSack.capacity = capi.value;
  capi.disabled = true;
};

test.onclick = function knapSacks() {
  if (knapSack.capacity == 0) {
    alert("please enter the size basket");
  } else {
    for (var i = 0; i < items.length; i++) {
      if (slct1.value == items[i].Name) {
        selectObject = items[i];
        if (selectObject.weight + knapSack.weight <= knapSack.capacity) {
          knapSack.item.push(selectObject);
          knapSack.weight += selectObject.weight;
          knapSack.value += selectObject.values;
          text.innerHTML += 'Items:' +' ' +
            selectObject.Name +
            "  |   " +
            'Weight:' + '  ' + selectObject.weight +
            "  |   " +
           'Value:' + '  ' + selectObject.values +'  '+ '<br>' + '<br>';
            
          slct1.remove(slct1.selectedIndex);
          totalW.innerHTML ='Total_weight:'+' '+knapSack.weight
          totalV.innerHTML ='Total_value:'+' '+knapSack.value
          capa.innerHTML ='Capacity:'+' '+knapSack.capacity
        } else {
          alert("size exceeded");
        }
        console.log(knapSack.value);
      }
    }
  }
};
