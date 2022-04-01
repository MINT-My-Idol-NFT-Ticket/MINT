export default function GenerateError(swal, title) {
  swal.fire({
    title: title ? title : '오류가 발생했습니다',
    showConfirmButton: false,
    icon: 'error',
  })
}
