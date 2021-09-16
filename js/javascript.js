function displayColor (){
  
  var r = Number(0);
  var g = Number(0);
  var b = Number(0);
  var rho = Number(0);
  var gamma = Number(0);
  var beta = Number(0);
  
  function getR () {
  r = Number(prompt("Please enter the R value"));
  if (r < 1 && r > 0) {
  return r;
  } else {
  alert("Please enter only numbers between 0 and 1.");
  getR();
  }
  }
  
  function getG () {
  g = Number(prompt("Please enter the G value"));
  if (g < 1 && g > 0) {
  return g;
  } else {
  alert("Please enter only numbers between 0 and 1.");
  getG();
  }
  }
  
  function getB () {
  b = Number(prompt("Please enter the B value"));
  if (b < 1 && b > 0) {
  return b;
  } else {
  alert("Please enter only numbers between 0 and 1.");
  getB();
  }
  }
  
  function convertR () {
  
  rho = ((1/(r + g + b)) * r).toFixed(1);
  return rho;
  }
  
  function convertG () {
  
  gamma = ((1/(r + g + b)) * g).toFixed(1);
  return gamma;
  }
  
  function convertB () {
  
  beta = ((1/(r + g + b)) * b).toFixed(1);
  return beta;
  }
  
  function convertL () {
  var l = Number((r*rho) + (g*gamma) + (b*beta)).toFixed(1);
  return l;
  }
  
  document.write("<h3>You Entered:</h3> <p>R: " + getR() + "</p><p>G: " + getG() + "</p><p>B: " + getB() + "</p>");

  document.write("<h3>Your results:</h3><p> &rho; = " + convertR() + "</p>");
  document.write("<p> &gamma; = " + convertG() + "</p>");
  document.write("<p> &beta; = " + convertB() + "</p>");
  document.write("<p> L = " + convertL() + "</p>");
}

displayColor();