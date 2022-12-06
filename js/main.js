var myHeading = document.querySelector('h1');
myHeading.textContent = 'ЦЦОД  "IT-Cube"';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Logo.jpg') {
      myImage.setAttribute ('src','images/Logo2.jpg');
    } else {
      myImage.setAttribute ('src','images/Logo.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Укажите свое имя');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'ИТ куб приветствует Вас ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'ИТ куб приветствует Вас ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }