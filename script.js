let keys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77]



let keyboard = document.createElement('div')
let input = document.createElement('input')
let instruction = document.createElement('p')
keyboard.className = 'keyboard'
input.className = 'input'
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
    initTags = initTags + '<div class="keyboard__key keyboard__key_active">'+String.fromCharCode(keys[i])+'</div>'
  }
  initTags = initTags + '<div class="keyboard__key">,</div><div class="keyboard__key">.</div><div class="keyboard__key">/</div><div class="keyboard__right-shift">shift</div><div class="keyboard__left-ctrl">ctrl</div><div class="keyboard__win">win</div><div class="keyboard__left-alt">alt</div><div class="keyboard__space"></div><div class="keyboard__right-alt">alt</div><div class="keyboard__right-ctrl">ctrl</div><div class="keyboard__left">left</div><div class="keyboard__up">up</div><div class="keyboard__down">down</div><div class="keyboard__right">right</div>'
  document.querySelector('.keyboard').innerHTML = initTags
}
init()

let keys_arr = document.querySelectorAll('.keyboard__key')
for (let i = 0; i<keys_arr.length; i++){
  keys_arr[i].setAttribute('UpperCaseName', keys_arr[i].innerHTML)
  keys_arr[i].setAttribute('LowerCaseName', keys_arr[i].innerHTML.toLowerCase())
}

console.log(keys_arr);