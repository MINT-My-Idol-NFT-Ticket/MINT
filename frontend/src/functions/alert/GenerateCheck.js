export default function GenerateCheck(swal, title) {
  swal.fire({
    title: title ? title : '^^',
    showConfirmButton: false,
    icon: 'success',
  })
}
