const SwitchButton = document.getElementById('switchbutton')
const VisitText = document.getElementById('visits')
let CurrentTheme = window.localStorage.getItem('CurrentTheme')
let VisitNum = parseInt(window.localStorage.getItem('VisitNum'))

if (isNaN(VisitNum)) {
  VisitNum = 0
}

const SwitchTheme = function () {
  if (CurrentTheme === 'day-theme') {
    CurrentTheme = 'night-theme'
  } else {
    CurrentTheme = 'day-theme'
  }
  document.body.setAttribute('class', CurrentTheme)
  window.localStorage.setItem('CurrentTheme', CurrentTheme)
}

const SetUp = function () {
  if (CurrentTheme !== 'day-theme' && CurrentTheme !== 'night-theme') {
    CurrentTheme = 'day-theme'
    window.localStorage.setItem('CurrentTheme', CurrentTheme)
  }
  document.body.setAttribute('class', CurrentTheme)
  if (VisitNum !== null) {
    VisitNum = parseInt(VisitNum) + 1
  } else {
    VisitNum = 1
  }
  window.localStorage.setItem('VisitNum', VisitNum)
}

SetUp()
SwitchButton.addEventListener('click', SwitchTheme)
VisitText.innerText = 'You have visited this site ' + VisitNum + ' time(s).'
