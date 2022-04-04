import { lightColor, darkColor, isLight } from '../util/color.js'

export default function GenerateConfirmNoBtn(swal, title, callback, bright) {
  swal
    .fire({
      title: title,
      icon: 'warning',
      color: isLight(bright) ? darkColor : lightColor,
      background: isLight(bright) ? lightColor : darkColor,
      showConfirmButton: false,
    })
    .then(result => {
      if (result.isConfirmed) callback()
    })
}
