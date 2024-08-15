
let landing = document.querySelector('.landing-page')
let pathes = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg']

/* 0, 1, 2, 3, 4, 5  => by me */

let count = 0;
setInterval(function () {
  if (count == pathes.length) count = 0
  landing.style.backgroundImage = `url('../images/${pathes[count]}')`;
  count += 1
}, 2000)


/* Random Images By Elzer0 */

// setInterval(()=>{
//   let randomNumber = Math.floor(Math.random() * pathes.length)
//   landing.style.backgroundImage = `url('../images/${pathes[randomNumber]}')`;
// },2000)




// settings box
let SettingsBox = document.querySelector('.settings-box')
let SettingsBoxBTN = document.querySelector('.btn-settings')
let gearIcon = document.querySelector('.btn-settings .fa-gear')

SettingsBoxBTN.addEventListener('click', function () {
  gearIcon.classList.toggle("fa-spin");
  SettingsBox.classList.toggle('active')
})


// Show Bullets
let BulletsOption = document.querySelector('.Bollats')
let btnBulletsYes = document.querySelectorAll('.settings-box .settings-container .Bullets-option button')[0]
let btnBulletsNo = document.querySelectorAll('.settings-box .settings-container .Bullets-option button')[1]


btnBulletsNo.addEventListener('click', function () {
  btnBulletsYes.classList.remove('active')
  this.classList.add('active')
  BulletsOption.style.display = 'none'
})

btnBulletsYes.addEventListener('click', function () {
  btnBulletsNo.classList.remove('active')
  this.classList.add('active')
  BulletsOption.style.display = 'flex'

})



// start Skills Section

let spanSkill = document.querySelectorAll('.ourSkills .ourSkills-all article .skill-progress span')
spanSkill.forEach(function (e) {
  e.style.width = e.getAttribute('data-progress')
})

