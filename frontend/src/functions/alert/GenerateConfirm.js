import { lightColor, darkColor, isLight, mainColor } from '../Color.js'

export default function GenerateConfirm(swal, title, text, bright) {
  swal
    .fire({
      title: title,
      text: text ? text : 'no-text',
      icon: 'warning',
      color: isLight('dark') ? darkColor : lightColor,
      background: isLight('dark') ? lightColor : darkColor,
      showCancelButton: true,
      confirmButtonColor: '#cdcdcd',
      confirmButtonText: '예',
      cancelButtonColor: mainColor,
      cancelButtonText: '아니오',
    })
    .then(result => {
      console.log(result)
    })
}
