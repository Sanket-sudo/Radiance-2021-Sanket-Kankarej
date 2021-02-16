function validate_min() {
  let min = document.getElementById('min').value;

  if(min==undefined || min=='') {
    alert('Please fill the minimum value first');

    document.getElementById('min').focus();
  }
}

function validate_max() {
  console.log('max called');
  let max = parseInt(document.getElementById('max').value);
  let min = parseInt(document.getElementById('min').value);

  if(max < min) {
    document.getElementById('max').style.color = 'red';
    document.getElementById('max').style.borderColor = 'red';
  } else {
    document.getElementById('max').style.color = 'black';
    document.getElementById('max').style.borderColor = '#C1C8CE';
  }
}