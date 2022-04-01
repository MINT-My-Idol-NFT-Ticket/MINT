export default function GenerateTimer(swal, title) {
  swal.fire({
    title: title ? title : '진행중입니다',
    timerProgressBar: true,
    didOpen: () => {
      swal.showLoading()
      const b = swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        b.textContent = swal.getTimerLeft()
      }, 200)
    },
    willClose: () => {
      clearInterval(timerInterval)
    },
  })
}

let timerInterval
