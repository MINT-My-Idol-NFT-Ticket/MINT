import { lightColor, darkColor, isLight, mainColor } from '../util/color.js'

export default function GenerateCheck(swal, title, callback, bright) {
  swal
    .fire({
      title: title ? title : '^^',
      showConfirmButton: true,
      icon: 'success',
      confirmButtonColor: mainColor,
      confirmButtonText: '확인',
      color: isLight(bright) ? darkColor : lightColor,
      background: isLight(bright) ? lightColor : darkColor,
    })
    .then(res => {
      if (res.isConfirmed) {
        if (callback) callback()
      }
    })
}
