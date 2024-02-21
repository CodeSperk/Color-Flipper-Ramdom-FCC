const hexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const currentBg = document.querySelector('.current-bg');

btn.addEventListener('click', function(){
  let hexClr = '#';

  for(let i=0; i<6; i++){
    const newNumber = hexCodes[getRandomNumber()];
    hexClr+= newNumber;
    console.log(hexClr);
  }
  currentBg.innerHTML = hexClr;
  document.body.style.backgroundColor = hexClr;
});


function getRandomNumber(){
  return Math.floor(Math.random()*hexCodes.length);
}