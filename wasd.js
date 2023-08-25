const imgW = document.getElementById('imgW')
const imgA = document.getElementById('imgA')
const imgS = document.getElementById('imgS')
const imgD = document.getElementById('imgD')

document.addEventListener('keydown', function(e){
    if(e.key === 'w') {
        imgW.src="img/Dark/WDark.png"
    } else if(e.key === 'a') {
        imgA.src="img/Dark/ADark.png"
    } else if(e.key === 's') {
        imgS.src="img/Dark/SDark.png"
    } else if(e.key === 'd') {
        imgD.src="img/Dark/DDark.png"
    }
 })

 document.addEventListener('keyup', function(e){
    if(e.key === 'w') {
        imgW.src="img/White/WWhite.png"
    } else if(e.key === 'a') {
        imgA.src="img/White/AWhite.png"
    } else if(e.key === 's') {
        imgS.src="img/White/SWhite.png"
    } else if(e.key === 'd') {
        imgD.src="img/White/DWhite.png"
    }
 })