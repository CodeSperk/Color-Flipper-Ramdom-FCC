const colors = ["green", "rgba(133,122,200)", "#f15025", "blue", "yellow", "purple"];



const btn = document.getElementById('btn');
const currentBg = document.querySelector('.current-bg');

btn.addEventListener('click', function(){
  const randomNumber = getRandomNum();
  currentBg.style.color= colors[randomNumber];

  document.body.style.backgroundColor = colors[randomNumber];
});


// to get random number
function getRandomNum(){
  const randomNum = Math.floor(Math.random()*colors.length);
  return randomNum;
}
