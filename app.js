// https://www.omnicalculator.com/other/drone-flight-time

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const droneflighttimeRadio = document.getElementById('droneflighttimeRadio');
const batterycapacityRadio = document.getElementById('batterycapacityRadio');
const batterydischargeRadio = document.getElementById('batterydischargeRadio');
const batteryvoltageRadio = document.getElementById('batteryvoltageRadio');
const allupweightRadio = document.getElementById('allupweightRadio');

let droneflighttime;
let batterycapacity = v1;
let batterydischarge = v2;
let batteryvoltage = v3;
let allupweight = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

droneflighttimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Battery capacity';
  variable2.textContent = 'Battery discharge';
  variable3.textContent = 'Battery voltage';
  variable4.textContent = 'All up weight';
  batterycapacity = v1;
  batterydischarge = v2;
  batteryvoltage = v3;
  allupweight = v4;
  result.textContent = '';
});

batterycapacityRadio.addEventListener('click', function() {
  variable1.textContent = 'Drone flight time';
  variable2.textContent = 'Battery discharge';
  variable3.textContent = 'Battery voltage';
  variable4.textContent = 'All up weight';
  droneflighttime = v1;
  batterydischarge = v2;
  batteryvoltage = v3;
  allupweight = v4;
  result.textContent = '';
});

batterydischargeRadio.addEventListener('click', function() {
  variable1.textContent = 'Drone flight time';
  variable2.textContent = 'Battery capacity';
  variable3.textContent = 'Battery voltage';
  variable4.textContent = 'All up weight';
  droneflighttime = v1;
  batterycapacity = v2;
  batteryvoltage = v3;
  allupweight = v4;
  result.textContent = '';
});

batteryvoltageRadio.addEventListener('click', function() {
  variable1.textContent = 'Drone flight time';
  variable2.textContent = 'Battery capacity';
  variable3.textContent = 'Battery discharge';
  variable4.textContent = 'All up weight';
  droneflighttime = v1;
  batterycapacity = v2;
  batterydischarge = v3;
  allupweight = v4;
  result.textContent = '';
});

allupweightRadio.addEventListener('click', function() {
  variable1.textContent = 'Drone flight time';
  variable2.textContent = 'Battery capacity';
  variable3.textContent = 'Battery discharge';
  variable4.textContent = 'Battery voltage';
  droneflighttime = v1;
  batterycapacity = v2;
  batterydischarge = v3;
  batteryvoltage = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(droneflighttimeRadio.checked)
    result.textContent = `Drone flight time = ${computedroneflighttime().toFixed(2)}`;

  else if(batterycapacityRadio.checked)
    result.textContent = `Battery capacity = ${computebatterycapacity().toFixed(2)}`;

  else if(batterydischargeRadio.checked)
    result.textContent = `Battery discharge = ${computebatterydischarge().toFixed(2)}`;

  else if(batteryvoltageRadio.checked)
    result.textContent = `Battery voltage = ${computebatteryvoltage().toFixed(2)}`;

  else if(allupweightRadio.checked)
    result.textContent = `All up weight = ${computeallupweight().toFixed(2)}`;
})

// calculation

// droneflighttime = (batterycapacity * (batterydischarge / 100) / (allupweight * 170 / batteryvoltage)) * 60

// P = 170

function computedroneflighttime() {
  return (Number(batterycapacity.value) * (Number(batterydischarge.value) / 100) / (Number(allupweight.value) * 170 / Number(batteryvoltage.value))) * 60;
}

function computebatterycapacity() {
  return ((Number(droneflighttime.value) / 60) * (Number(allupweight.value) * 170 / Number(batteryvoltage.value))) / (Number(batterydischarge.value) / 100);
}

function computebatterydischarge() {
  return (((Number(droneflighttime.value) / 60) * (Number(allupweight.value) * 170 / Number(batteryvoltage.value))) / Number(batterycapacity.value)) * 100;
}

function computebatteryvoltage() {
  return Number(allupweight.value) * 170 / ((Number(batterycapacity.value) * (Number(batterydischarge.value) / 100)) / (Number(droneflighttime.value) / 60));
}

function computeallupweight() {
  return (((Number(batterycapacity.value) * (Number(batterydischarge.value) / 100)) / (Number(droneflighttime.value) / 60)) * Number(batteryvoltage.value)) / 170;
}