// alert('https://github.com/DenisParfimovich/virtual-keyboard/pull/1')

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
let lang = 'En'
let s = 0
let keys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77]
let keysRu = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047, 1061, 1066,1060,1067,1042,1040,1055,1056,1054,1051,1044,1046,1069,1071,1063,1057,1052,1048,1058,1068,1041,1070]
// 1040, 1041, 1042, 1043, 1044, 1045, 1025, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071
// а      б     в     г     д     е     ё     ж     з     и     й     к     л     м     н     о     п     р     с     т     у     ф     х     ц     ч     ш     щ     ъ     ы     ь     э     ю     я     
let keyboard = document.createElement('div')
let showLang = document.createElement('p')
let input = document.createElement('textarea')
let instruction = document.createElement('p')
let pullRequest = document.createElement('a')

pullRequest.className = 'pull'
keyboard.className = 'keyboard'
input.className = 'input'
showLang.className = 'show-lang'
pullRequest.setAttribute('href', 'https://github.com/DenisParfimovich/virtual-keyboard/pull/1')
pullRequest.setAttribute('target', '_blank')
pullRequest.innerHTML = 'Pull request if you need'
showLang.innerHTML = lang
input.setAttribute('type', 'text')

instruction.className = 'instruction'
instruction.innerHTML = 'Language switching is carried out using a keyboard shortcut "left alt + left shift". The application is implemented for Windows OS'

document.body.append(instruction)
document.body.append(pullRequest)
document.body.append(showLang)
document.body.append(input)

input.focus()
document.onclick = ()=>{
  input.focus()
  
}
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
  keys_arr = document.querySelectorAll('.keyboard__key')
  left_alt = document.querySelector('.keyboard__left-alt')
  right_alt = document.querySelector('.keyboard__right-alt')
  win = document.querySelector('.keyboard__win')
  backspace = document.querySelector('.keyboard__backspace')
  tab = document.querySelector('.keyboard__tab')
  backSlash = document.querySelector('.keyboard__back-slash')
  caps = document.querySelector('.keyboard__caps')
  enter = document.querySelector('.keyboard__enter')
  leftShift = document.querySelector('.keyboard__left-shift')
  rightShift = document.querySelector('.keyboard__right-shift')
  leftCtrl = document.querySelector('.keyboard__left-ctrl')
  rightCtrl = document.querySelector('.keyboard__right-ctrl')
  up = document.querySelector('.keyboard__up')
  down = document.querySelector('.keyboard__down')
  left = document.querySelector('.keyboard__left')
  right = document.querySelector('.keyboard__right')
  space = document.querySelector('.keyboard__space')
  showLang.innerHTML = lang
}
init()

function initRu (){
  let initTags = '<div class="keyboard__key">Ё</div>'
  for (let i = 0; i < keysRu.length; i++){
    if (i==10){
      initTags = initTags + '<div class="keyboard__key">-</div><div class="keyboard__key">=</div><div class="keyboard__backspace">backspace</div><div class="keyboard__tab">tab</div>'
    }
    if (i==22){
      initTags = initTags + '<div class="keyboard__back-slash">&#92</div><div class="keyboard__caps">caps lock</div>'
    }
    if (i==33){
      initTags = initTags + '<div class="keyboard__enter">enter</div><div class="keyboard__left-shift">shift</div>'
    }
    initTags = initTags + '<div class="keyboard__key">'+String.fromCharCode(keysRu[i])+'</div>'
  }
  initTags = initTags + '<div class="keyboard__key">.</div><div class="keyboard__right-shift">shift</div><div class="keyboard__left-ctrl">ctrl</div><div class="keyboard__win">win</div><div class="keyboard__left-alt">alt</div><div class="keyboard__space"></div><div class="keyboard__right-alt">alt</div><div class="keyboard__right-ctrl">ctrl</div><div class="keyboard__left">left</div><div class="keyboard__up">up</div><div class="keyboard__down">down</div><div class="keyboard__right">right</div>'
  document.querySelector('.keyboard').innerHTML = initTags
  keys_arr = document.querySelectorAll('.keyboard__key')

  left_alt = document.querySelector('.keyboard__left-alt')
  right_alt = document.querySelector('.keyboard__right-alt')
  win = document.querySelector('.keyboard__win')
  backspace = document.querySelector('.keyboard__backspace')
  tab = document.querySelector('.keyboard__tab')
  backSlash = document.querySelector('.keyboard__back-slash')
  caps = document.querySelector('.keyboard__caps')
  enter = document.querySelector('.keyboard__enter')
  leftShift = document.querySelector('.keyboard__left-shift')
  rightShift = document.querySelector('.keyboard__right-shift')
  leftCtrl = document.querySelector('.keyboard__left-ctrl')
  rightCtrl = document.querySelector('.keyboard__right-ctrl')
  up = document.querySelector('.keyboard__up')
  down = document.querySelector('.keyboard__down')
  left = document.querySelector('.keyboard__left')
  right = document.querySelector('.keyboard__right')
  space = document.querySelector('.keyboard__space')
  showLang.innerHTML = lang
}
// initRu()
// keyboard.innerHTML = ''








window.addEventListener('keydown', (e)=>{
  for (let i = 0; i < keys_arr.length; i++){
    if (e.key === keys_arr[i].innerHTML.toLowerCase() || e.key === keys_arr[i].innerHTML.toUpperCase()){
      keys_arr[i].classList.add('keyboard__key_active')

    } else if (e.code === 'AltLeft'){
      left_alt.classList.add('keyboard__left-alt_active')
      if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'En' && s === 0) {
        lang = 'Ru'
        s = 1
        keyboard.innerHTML = ''
        initRu()
        console.log(lang);
      } else if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'Ru' && s === 0){
        lang = 'En'
        s = 1
        keyboard.innerHTML = ''
        init()
        console.log(lang);
      }

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
      if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'En' && s === 0){
        lang = 'Ru'
        s = 1
        keyboard.innerHTML = ''
        initRu()
        console.log(lang);
      } else if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'Ru' && s === 0){
        lang = 'En'
        s = 1
        keyboard.innerHTML = ''
        init()
        console.log(lang);
      }
      
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
      s = 0
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
      s = 0
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

let innerText = input.value
keyboard.addEventListener('click', (event)=>{
  if (event.target.className === 'keyboard__key'){
    event.target.classList.add('keyboard__key_active')
    if (leftShift.classList.contains('keyboard__left-shift_active') || rightShift.classList.contains('keyboard__right-shift_active') || caps.classList.contains('keyboard__caps_active')){
      innerText = input.value
      innerText = innerText + event.target.innerHTML.toUpperCase()
      input.value = innerText
    } else {
      innerText = input.value
      innerText = innerText + event.target.innerHTML.toLowerCase()
      input.value = innerText
    }
  } else if (event.target.classList.contains('keyboard__left-alt')){
    event.target.classList.toggle('keyboard__left-alt_active')
    if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'En' && s === 0){
      lang = 'Ru'
      keyboard.innerHTML = ''
      initRu()
      console.log(lang);
    } else if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'Ru' && s === 0){
      lang = 'En'
      keyboard.innerHTML = ''
      init()
      console.log(lang);
    }



  } else if (event.target.className === 'keyboard__right-alt'){
    event.target.classList.add('keyboard__right-alt_active')
  } else if (event.target.className === 'keyboard__win'){
    event.target.classList.add('keyboard__win_active')
  } else if (event.target.className === 'keyboard__backspace'){
    event.target.classList.add('keyboard__backspace_active')
    innerText = input.value
    innerText = innerText.slice(0, -1)
    input.value = innerText
  } else if (event.target.className === 'keyboard__tab'){
    event.target.classList.add('keyboard__tab_active')
    innerText = input.value
    innerText = innerText + '    '
    input.value = innerText
  } else if (event.target.className === 'keyboard__back-slash'){
    event.target.classList.add('keyboard__back-slash_active')
    innerText = input.value
    innerText = innerText + String.fromCharCode(92)
    input.value = innerText
  } 
  else if (event.target.classList.contains('keyboard__caps')){
    event.target.classList.toggle('keyboard__caps_active')
  } 
  else if (event.target.className === 'keyboard__enter'){
    event.target.classList.add('keyboard__enter_active')
    innerText = input.value
    innerText = innerText + '\n'
    input.value = innerText
  } 
  else if (event.target.classList.contains('keyboard__left-shift')){    
    event.target.classList.toggle('keyboard__left-shift_active')
    if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'En' && s === 0){
      lang = 'Ru'
      keyboard.innerHTML = ''
      initRu()
      console.log(lang);
    } else if (leftShift.classList.contains('keyboard__left-shift_active') && left_alt.classList.contains('keyboard__left-alt_active') && lang === 'Ru' && s === 0){
      lang = 'En'
      keyboard.innerHTML = ''
      init()
      console.log(lang);
    }
  } 
  else if (event.target.classList.contains('keyboard__right-shift')){
    event.target.classList.toggle('keyboard__right-shift_active')
  } 
  else if (event.target.className === 'keyboard__left-ctrl'){
    event.target.classList.add('keyboard__left-ctrl_active')
  } else if (event.target.className === 'keyboard__right-ctrl'){
    event.target.classList.add('keyboard__right-ctrl_active')
  } else if (event.target.className === 'keyboard__up'){
    event.target.classList.add('keyboard__up_active')
  } else if (event.target.className === 'keyboard__down'){
    event.target.classList.add('keyboard__down_active')
  } else if (event.target.className === 'keyboard__left'){
    event.target.classList.add('keyboard__left_active')
  } else if (event.target.className === 'keyboard__right'){
    event.target.classList.add('keyboard__right_active')
  } else if (event.target.className === 'keyboard__space'){
    event.target.classList.add('keyboard__space_active')
  }
  setTimeout(()=>{
    event.target.classList.remove('keyboard__key_active')

    event.target.classList.remove('keyboard__right-alt_active')
    event.target.classList.remove('keyboard__win_active')
    event.target.classList.remove('keyboard__backspace_active')
    event.target.classList.remove('keyboard__tab_active')
    event.target.classList.remove('keyboard__back-slash_active')

    event.target.classList.remove('keyboard__enter_active')

    event.target.classList.remove('keyboard__left-ctrl_active')
    event.target.classList.remove('keyboard__right-ctrl_active')
    event.target.classList.remove('keyboard__up_active')
    event.target.classList.remove('keyboard__down_active')
    event.target.classList.remove('keyboard__left_active')
    event.target.classList.remove('keyboard__right_active')
    event.target.classList.remove('keyboard__space_active')
  }, 100)

  // console.log(event.target);
})

