import './App.css'
import ImgQrcode from './assets/images/image-qr-code.png'
function App() {
  return (
    <div className=' w-full h-screen bg-[#7B879D] absolute flex flex-col items-center justify-center'>
      <div className=' w-[20rem] h-[35rem] flex flex-col  rounded-lg bg-white items-center'>
        <img src={ImgQrcode} className='w-[18rem] h-[19rem] mt-4 rounded-xl' alt="" />
        <div className='w-[16rem] h-[19rem] text-center'>
          <br />
          <h1 className=' font-bold text-[1.2rem]'> Improve your front-end skills by building project</h1>
          <br />
          <p>scan the QR code to visit Front-end Menter and take your coding skill to the next level</p>
        </div>
      </div>
    </div>
  )
}

export default App
