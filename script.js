let keys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77]



let keyboard = document.createElement('div')
keyboard.className = 'keyboard'
document.body.append(keyboard)

function init (){
  let initTags = '<div class="keyboard__key keyboard__key_active">`</div>'
  for (let i = 0; i < keys.length; i++){
    if (i==10){
      initTags = initTags + '<div class="keyboard__key keyboard__key_active">-</div><div class="keyboard__key keyboard__key_active">=</div><div class="keyboard__backspace keyboard__backspace_active">backspace</div><div class="keyboard__tab keyboard__tab_active">tab</div>'
    }
    if (i==20){
      initTags = initTags + '<div class="keyboard__key keyboard__key_active">[</div><div class="keyboard__key keyboard__key_active">]</div><div class="keyboard__back-slash keyboard__back-slash_active">&#92</div><div class="keyboard__caps keyboard__caps_active">caps lock</div>'
    }
    if (i==29){
      initTags = initTags + '<div class="keyboard__key keyboard__key_active">;</div><div class="keyboard__key keyboard__key_active">&#39</div><div class="keyboard__enter keyboard__enter_active">enter</div><div class="keyboard__left-shift keyboard__left-shift_active">shift</div>'
    }
    initTags = initTags + '<div class="keyboard__key keyboard__key_active">'+String.fromCharCode(keys[i])+'</div>'
  }
  initTags = initTags + '<div class="keyboard__key keyboard__key_active">,</div><div class="keyboard__key keyboard__key_active">.</div><div class="keyboard__key keyboard__key_active">/</div><div class="keyboard__right-shift keyboard__right-shift_active">shift</div><div class="keyboard__left-ctrl keyboard__left-ctrl_active">ctrl</div><div class="keyboard__win keyboard__win_active">win</div><div class="keyboard__left-alt keyboard__left-alt_active">alt</div><div class="keyboard__space keyboard__space_active"></div><div class="keyboard__right-alt keyboard__right-alt_active">alt</div><div class="keyboard__right-ctrl keyboard__right-ctrl_active">ctrl</div><div class="keyboard__left keyboard__left_active">left</div><div class="keyboard__up keyboard__up_active">up</div><div class="keyboard__down keyboard__down_active">down</div><div class="keyboard__right keyboard__right_active">right</div>'
  document.querySelector('.keyboard').innerHTML = initTags
}

init()