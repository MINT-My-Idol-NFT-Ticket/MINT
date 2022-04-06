import { isLight, darkColor, lightColor } from '../util/color.js'

export default function GenerateTimer(swal, title, text, callback, bright) {
  swal.fire({
    title: title ? title : '진행중입니다',
    text: text ? text : '',
    color: isLight(bright) ? darkColor : lightColor,
    background: isLight(bright) ? lightColor : darkColor,
    allowOutsideClick: false,
    showCancelButton: false,
    timerProgressBar: true,
    didOpen: async () => {
      swal.showLoading()
      await callback()
    },
  })
}

let timerInterval
