import videoBG from '../assets/video/vid.mp4'

const Section1 = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-column py-32 text-xl md:text-8xl" id="section1">
      <div className="overlay"></div>
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        playsInline
        className="h-screen"
      ></video>
      <h1 className="text-center text-red-500 dark:text-slate-50 font-bold content text-4xl md:text-8xl tracking-wide">
        Pura vida familia
      </h1>
    </div>
  )
}

export default Section1