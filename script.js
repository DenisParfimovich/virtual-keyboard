let keys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77]



let keyboard = document.createElement('div')
let input = document.createElement('textarea')
let instruction = document.createElement('p')
keyboard.className = 'keyboard'
input.className = 'input'
input.setAttribute('type', 'text')

instruction.className = 'instruction'
instruction.innerHTML = 'Language switching is carried out using a keyboard shortcut alt+shift'
document.body.append(instruction)
document.body.append(input)
document.body.append(keyboard)

function init (){
  let initTags = '<div class="keyboard__key">`</div>'
  for (let i = 0; i < keys.length; i++){
    if (i==10){
      initTags = initTags + '<div class="keyboard__key">-</div><div class="keyboard__key">=</div><div class="keyboard__backspace">backspace</div><div class="keyboard__tab">tab</div>'
    }
    if (i==20){
      initTags = initTags + '<div class="keyboard__key">[</div><div class="keyboard__key">]</div><div class="keyboard__back-slash">&#92</div><div class="keyboard__caps">caps lock</div>'
    }
    if (i==29){
      initTags = initTags + '<div class="keyboard__key">;</div><div class="keyboard__key">&#39</div><div class="keyboard__enter">enter</div><div class="keyboard__left-shift">shift</div>'
    }
    initTags = initTags + '<div class="keyboard__key">'+String.fromCharCode(keys[i])+'</div>'
  }
  initTags = initTags + '<div class="keyboard__key">,</div><div class="keyboard__key">.</div><div class="keyboard__key">/</div><div class="keyboard__right-shift">shift</div><div class="keyboard__left-ctrl">ctrl</div><div class="keyboard__win">win</div><div class="keyboard__left-alt">alt</div><div class="keyboard__space"></div><div class="keyboard__right-alt">alt</div><div class="keyboard__right-ctrl">ctrl</div><div class="keyboard__left">left</div><div class="keyboard__up">up</div><div class="keyboard__down">down</div><div class="keyboard__right">right</div>'
  document.querySelector('.keyboard').innerHTML = initTags
}
init()

let keys_arr = document.querySelectorAll('.keyboard__key')
let left_alt = document.querySelector('.keyboard__left-alt')
let right_alt = document.querySelector('.keyboard__right-alt')
let win = document.querySelector('.keyboard__win')
let backspace = document.querySelector('.keyboard__backspace')
let tab = document.querySelector('.keyboard__tab')
let backSlash = document.querySelector('.keyboard__back-slash')
let caps = document.querySelector('.keyboard__caps')
let enter = document.querySelector('.keyboard__enter')
let leftShift = document.querySelector('.keyboard__left-shift')
let rightShift = document.querySelector('.keyboard__right-shift')
let leftCtrl = document.querySelector('.keyboard__left-ctrl')
let rightCtrl = document.querySelector('.keyboard__right-ctrl')
let up = document.querySelector('.keyboard__up')
let down = document.querySelector('.keyboard__down')
let left = document.querySelector('.keyboard__left')
let right = document.querySelector('.keyboard__right')
let space = document.querySelector('.keyboard__space')

for (let i = 0; i<keys_arr.length; i++){
  keys_arr[i].setAttribute('UpperCaseName', keys_arr[i].innerHTML)
  keys_arr[i].setAttribute('LowerCaseName', keys_arr[i].innerHTML.toLowerCase())
}


window.addEventListener('keydown', (e)=>{
  for (let i = 0; i < keys_arr.length; i++){
    if (e.key === keys_arr[i].innerHTML.toLowerCase() || e.key === keys_arr[i].innerHTML.toUpperCase()){
      keys_arr[i].classList.add('keyboard__key_active')

    } else if (e.code === 'AltLeft'){
      left_alt.classList.add('keyboard__left-alt_active')
    } else if (e.code === 'AltRight'){
      right_alt.classList.add('keyboard__right-alt_active')
    } else if (e.code === 'MetaLeft'){
      win.classList.add('keyboard__win_active')
    } else if (e.code === 'Backspace'){
      backspace.classList.add('keyboard__backspace_active')
    } else if (e.code === 'Tab'){
      tab.classList.add('keyboard__tab_active')
    } else if (e.code === 'Backslash'){
      backSlash.classList.add('keyboard__back-slash_active')
    } else if (e.code === 'CapsLock'){
      caps.classList.add('keyboard__caps_active')
    } else if (e.code === 'Enter'){
      enter.classList.add('keyboard__enter_active')
    } else if (e.code === 'ShiftLeft'){
      leftShift.classList.add('keyboard__left-shift_active')
    } else if (e.code === 'ShiftRight'){
      rightShift.classList.add('keyboard__right-shift_active')
    } else if (e.code === 'ControlLeft'){
      leftCtrl.classList.add('keyboard__left-ctrl_active')
    } else if (e.code === 'ControlRight'){
      rightCtrl.classList.add('keyboard__right-ctrl_active')
    } else if (e.code === 'ArrowUp'){
      up.classList.add('keyboard__up_active')
    } else if (e.code === 'ArrowDown'){
      down.classList.add('keyboard__down_active')
    } else if (e.code === 'ArrowLeft'){
      left.classList.add('keyboard__left_active')
    } else if (e.code === 'ArrowRight'){
      right.classList.add('keyboard__right_active')
    } else if (e.code === 'Space'){
      space.classList.add('keyboard__space_active')
    }
  }
  console.log(e.code);
})

window.addEventListener('keyup', (e)=>{
  for (let i = 0; i < keys_arr.length; i++){
    if (e.key === keys_arr[i].innerHTML.toLowerCase() || e.key === keys_arr[i].innerHTML.toUpperCase()){
      keys_arr[i].classList.remove('keyboard__key_active')

    } else if (e.code === 'AltLeft'){
      left_alt.classList.remove('keyboard__left-alt_active')
    } else if (e.code === 'AltRight'){
      right_alt.classList.remove('keyboard__right-alt_active')
    } else if (e.code === 'MetaLeft'){
      win.classList.remove('keyboard__win_active')
    } else if (e.code === 'Backspace'){
      backspace.classList.remove('keyboard__backspace_active')
    } else if (e.code === 'Tab'){
      tab.classList.remove('keyboard__tab_active')
    } else if (e.code === 'Backslash'){
      backSlash.classList.remove('keyboard__back-slash_active')
    } else if (e.code === 'CapsLock'){
      caps.classList.remove('keyboard__caps_active')
    } else if (e.code === 'Enter'){
      enter.classList.remove('keyboard__enter_active')
    } else if (e.code === 'ShiftLeft'){
      leftShift.classList.remove('keyboard__left-shift_active')
    } else if (e.code === 'ShiftRight'){
      rightShift.classList.remove('keyboard__right-shift_active')
    } else if (e.code === 'ControlLeft'){
      leftCtrl.classList.remove('keyboard__left-ctrl_active')
    } else if (e.code === 'ControlRight'){
      rightCtrl.classList.remove('keyboard__right-ctrl_active')
    } else if (e.code === 'ArrowUp'){
      up.classList.remove('keyboard__up_active')
    } else if (e.code === 'ArrowDown'){
      down.classList.remove('keyboard__down_active')
    } else if (e.code === 'ArrowLeft'){
      left.classList.remove('keyboard__left_active')
    } else if (e.code === 'ArrowRight'){
      right.classList.remove('keyboard__right_active')
    } else if (e.code === 'Space'){
      space.classList.remove('keyboard__space_active')
    }
  }

})
