export default function Splash() {
  setTimeout(function () {
    console.log('Works!')
  }, 3000)
  return (
    <div style={{ display: 'absolute' }}>
      <img src={'images/do-duck.gif'}></img>
      <img src={'images/mint.png'}></img>
    </div>
  )
}
