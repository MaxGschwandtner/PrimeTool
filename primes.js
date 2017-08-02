function isPrime(){
  var input = document.querySelector('input[name="entry"]').value;
  var result = document.getElementById('result1')
  var factors = [];
  for(i = 1; i <= input; i++){
    if(input%i == 0){
      factors[factors.length] = i;
    }
  }
  if(factors[1] == input){
    result.innerHTML = "<h3>" + "<span>" + input + "</span> ist prim!" + "</h3>";
    return false;
  }else{
    result.innerHTML = '<h3>' + '<span>' + input + '</span> ist nicht prim!' + '</h3>';
    return false;
  }
  factors = [];
}

function factorize(){
  var radio = document.querySelector('input[name="factor"]:checked').value;
  var factors = [];
  var input = document.querySelector('input[name="entry2"]').value;
  var result = document.getElementById('result2');


  if(radio == "fac"){
    for(i = 1; i <= input; i++){
      if(input%i == 0){
        factors[factors.length] = i;
      }
    }
    result.innerHTML = '<h3>' + 'Die Faktoren von <span>' + input + '</span> sind: <span>' + factors + '</span>' + '<h3>';
    factors = [];
  }

  if(radio == "pfac"){
    var n = input;
    while (n%2 == 0) {
      factors[factors.length] = 2;
      n = n/2;
    }
    while (n%3 == 0) {
      factors[factors.length] = 3;
      n = n/3;
    }
    var t = 0;
    var diff = 2;
    while (t*t <= 0) {
      while (n%t == 0) {
        factors[factors.length] = t;
        n = n/t;
      }
      t = t + diff;
      diff = 6 - diff;
    }
    if (n > 1) {
      factors[factors.length] = n;
    }
    result.innerHTML = '<h3>' + 'Die Primfaktoren von <span>' + input + '</span> sind: <span>' + factors + '</span>' + '<h3>';
    factors = [];;
  }
  return false;
}


function findPrimes(){
  var a = document.querySelector('input[name="entry3"]').value;
  var b = document.querySelector('input[name="entry4"]').value;
  var result = document.getElementById('result3');
  var factors = [];
  var primes = [];
  for(i = a; i <= b; i++){
    for(j = 1; j <= i; j++){
      if(i%j == 0){
        factors[factors.length] = j;
      }
    }
    if(factors[1] == i){
      primes[primes.length] = i;
    }
    factors = [];
  }
  if (primes.length == 0) {
    result.innerHTML = '<h3>' + 'Zwischen <span>' + a + '</span> und <span>' + b + '</span> sind keine Primzahlen!' + '</h3>';
  }else{
    result.innerHTML = '<h3>' + 'Die Primzahlen zwischen <span>' + a + '</span> und <span>' + b + '</span> sind <span>' + primes + '</span>!' + '</h3>';
  }
  primes = [];
  return false;
}
