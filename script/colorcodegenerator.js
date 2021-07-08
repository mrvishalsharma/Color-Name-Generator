const colors = ["RED","Silver","Gray","Black","Maroon","Yellow","Olive","Lime","Green","Aqua","Teal","Blue","Navy","Fuchsia","Purple","MediumVioletRed","DeepPink","HotPink","Pink","DarkRed","Firebrick","Crimson","IndianRed","Salmon","OrangeRed","Coral","DarkKhaki","Gold","LemonChiffon","Maroon","Brown","Sienna","RosyBrown","SandyBrown","Tan","Burlywood","Indigo","DarkMagenta","DarkViolet","DarkOrchid","Azure","LightSlateGray","Gainsboro","MediumSpringGreen","DarkTurquoise","PaleTurquoise","DodgerBlue","LightBlue","PaleGreen"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
  // get random number between 0 - 50 index 0 to index 50
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];

});

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length);
}
