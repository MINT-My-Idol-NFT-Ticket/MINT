import { lightColor, darkColor, isLight } from '../util/color.js'

export default function GenerateError(swal, title, text, callback, bright) {
  swal
    .fire({
      title: title ? title : '오류가 발생했습니다',
      text: text ? text : '',
      color: isLight(bright) ? darkColor : lightColor,
      background: isLight(bright) ? lightColor : darkColor,
      showConfirmButton: false,
      icon: 'error',
    })
    .then(res => {
      if (res.isDismissed) {
        if (callback) callback()
      }
    })
}
