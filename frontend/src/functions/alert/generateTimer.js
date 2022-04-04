import { isLight, darkColor, lightColor } from '../util/color.js'

export default function GenerateTimer(swal, title, html, callback, bright) {
  swal
    .fire({
      title: title ? title : '진행중입니다',
      html: html ? html : '',
      color: isLight(bright) ? darkColor : lightColor,
      background: isLight(bright) ? lightColor : darkColor,
      showCancelButton: false,
      timerProgressBar: true,
      didOpen: async () => {
        swal.showLoading()
        await callback()
        console.log('done')
      },
    })
    .then(res => console.log(res))
}

let timerInterval
