import { lightColor, darkColor, isLight, mainColor } from '../util/color.js'

export default function GenerateConfirm(swal, title, text, callback, bright) {
  swal
    .fire({
      title: title,
      text: text ? text : 'no-text',
      icon: 'warning',
      color: isLight(bright) ? darkColor : lightColor,
      background: isLight(bright) ? lightColor : darkColor,
      showCancelButton: true,
      confirmButtonColor: '#cdcdcd',
      confirmButtonText: '예',
      cancelButtonColor: mainColor,
      cancelButtonText: '아니오',
    })
    .then(result => {
      if (result.isConfirmed) callback()
    })
}
