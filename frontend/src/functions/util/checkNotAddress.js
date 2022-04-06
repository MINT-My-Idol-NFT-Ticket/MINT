export default function checkNotAddress(navigate) {
  if (!sessionStorage.getItem('address')) {
    return navigate()
  }
  return true
}
