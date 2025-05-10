
let wrapper3 = document.querySelector('.wrapper3')
let btnInfo = document.querySelector('.btn-info')
let clo = document.querySelector('.clo')
let photoBg = document.querySelectorAll('.photo-bg')
let aud = document.querySelector('.aud')
let music = document.querySelector('.music')
let backToMainMenu = document.querySelectorAll('.back-to-main-menu')
let modalMain = document.querySelector('.modal-main')
let modalSettings = document.querySelector('.modal-settings')
let btnSettings = document.querySelectorAll('.btn-settings')[1]
let del = document.querySelector('.del')
let name = document.querySelector('.name')
let wrapper2 = document.querySelector('.wrapper2')
let coin = document.querySelector('.coin')
let coinText = document.querySelector('.coin-text')
let nameBtn = document.querySelector('.name-btn')
let inputName = document.querySelector('.input-name')
let musicText = document.querySelector('.music-text')

let number = 0

let typeOfGame = 'smaller'


let bg = localStorage.getItem('bg')

document.body.style.backgroundImage=bg

for(let i = 0;i<photoBg.length;i++){

  photoBg[i].addEventListener('click',function a (){
    for(let j = 0; j < photoBg.length; j++){
      photoBg[j].style.borderColor = 'white'
    }
    photoBg[i].style.borderColor = 'blue'
    document.body.style.backgroundImage= 'url(' + photoBg[i].src + ')'
    localStorage.setItem('bg', 'url(' + photoBg[i].src + ')')
  })
  
}

let currentName = localStorage.getItem('name')
if(currentName){
  inputName.style.display = 'none'
  nameBtn.style.display = 'none'
  name.textContent = 'Hello, '+currentName
del.style.display = 'flex'
}

del.addEventListener('click', function a (){
localStorage.clear()
location.reload()

})

nameBtn.addEventListener('click', function a () {
  if(inputName.value.length>10){
    alert('error' )
  }
  else {
    localStorage.setItem('name',inputName.value) 
    alert('saved: '  + inputName.value)
    location.reload()
  }
})





























coin.addEventListener('click',function a (){
    number++
    coinText.textContent = number
    let randomLeft = Math.random()*90
    coin.style.left = randomLeft + '%'

      let randomTop = Math.random()*90
    coin.style.top = randomTop + '%'
    coin.style.transition = '1s'
    




    if(number == 5){
      showNextLevel()
      if (typeOfGame == 'smaller'){
        coin.style.height = '120px'
      }

      if(typeOfGame == 'opacity'){
        coin.style.opacity = '30%'

      }
      
    }

    else if(number == 10){
      showNextLevel()
      if(typeOfGame == 'smaller') {
        coin.style.height = '100px'
      }
      if(typeOfGame == 'opacity'){
        coin.style.opacity = '10%'

      }
    }

    else if(number == 15){
      showNextLevel()
     if(typeOfGame == 'smaller') {
      coin.style.height = '50px'
    }
    if(typeOfGame == 'opacity'){
      coin.style.opacity = '6%'

    }
    }
      
     else if (number == 20){
      showNextLevel()

     if(typeOfGame == 'smaller') {
      coin.style.height = '10px'
    }
    if(typeOfGame == 'opacity'){
      coin.style.opacity = '4%'

    }
    
    }
    
     else if (number == 25){
       showNextLevel()
       if(typeOfGame == 'smaller') {
        coin.style.height = '5px'
      }
      if(typeOfGame == 'opacity'){
        coin.style.opacity = '2%'
  
      }

     } 

   

})


function showNextLevel (){
  wrapper2.style.top = '0'
  setTimeout(() => {
    wrapper2.style.top = '-100vh'
  }, 1000);
}


let bt = document.querySelectorAll('.bt')
let wrapper = document.querySelector('.wrapper')


for (let i = 0; i < bt.length; i++ ){
  bt[i].addEventListener('click',function a(){
    wrapper.style.display = 'none'
  })
    
}

let btnOpacity = document.querySelector('.btn-opacity')


btnOpacity.addEventListener('click', function a (){
  typeOfGame = 'opacity'
})


  

btnSettings.addEventListener('click',function a (){
  modalSettings.style.display = 'flex' 
  modalMain.style.display = 'none'    
})

backToMainMenu[0].addEventListener('click',function a (){
  wrapper3.style.display = 'none' 
  modalSettings.style.display = 'none' 
  modalMain.style.display = 'flex'   
})


backToMainMenu[1].addEventListener('click',function a (){
  wrapper3.style.display = 'none' 
  modalSettings.style.display = 'none' 
  modalMain.style.display = 'flex'   
})


let statusMusic = false



music.addEventListener('click',function a(){
  if(statusMusic == false){
    aud.play()
    statusMusic = true
    musicText.textContent = 'Turn off music'
    music.style.border = '2px solid blue'
  }
  else if(statusMusic == true){
    aud.pause()
    statusMusic = false
    musicText.textContent = 'Turn on music'  
    music.style.border = 'none'
  }
  
})

clo.addEventListener('input',function a (){
  document.body.style.backgroundImage = 'none'
  document.body.style.backgroundColor = clo.value
})

btnInfo.addEventListener('click',function a (){
wrapper3.style.display = 'flex'
})








