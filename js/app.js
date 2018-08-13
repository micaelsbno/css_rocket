function createStar(number){
  star = document.createElement('div')
  star.className = 'star'
  rand = random()
  star.style = `top: ${rand[0]}vh; left: ${rand[1]}vw`
  document.querySelector('.stars-' + number).appendChild(star)
}

function random(){
  rand = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)]
  return rand
}

while (document.querySelectorAll('.star').length < 400) {
  createStar(1)
  createStar(2)
}

function fadeSmallFire(){
  smallFire = document.querySelector('.fire__small')
  smallFire.style = "opacity: 0"
}

function lightSmallFire(){
  smallFire = document.querySelector('.fire__small')
  smallFire.style = "opacity: 1"
}

function fadeBigFire(){
  bigFire = document.querySelector('.fire__big')
  bigFire.style = "opacity: 0"
}

function lightBigFire(){
  bigFire = document.querySelector('.fire__big')
  bigFire.style = "opacity: 1"
}

function booster(){
  setInterval(fadeSmallFire,3000)
  setInterval(fadeBigFire,2800)
}

booster()

setTimeout(() => {
  setInterval(lightSmallFire,3000)
  setInterval(lightBigFire,2800)
},400)

function shootStar(number){
  space = document.querySelector('.shooting-star')
  star = document.createElement('div')
  star.className = "shoot" + number
  star.style = 'top:' + Math.floor(Math.random() * 100) + '%';
  space.appendChild(star)
}

setInterval(()=>{
  shootStar(1)}, 2400
)
setInterval(()=>{
 shootStar(2) 
}, 2100)
