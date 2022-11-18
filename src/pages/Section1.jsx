import videoBG from '../assets/video/vid.mp4'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Section1 = ({scroll}) => {

  const pfvMov = classNames(
    scroll < 200
      ? 'text-center text-red-500 dark:text-slate-50 font-bold content text-4xl md:text-8xl tracking-wide transition duration-700 ease-in-out z-10'
      : 'text-center text-red-500 dark:text-slate-50 font-bold content text-4xl md:text-8xl tracking-widetransition duration-700 ease-in-out opacity-0'
  )
  return (
    <div id="section1">
      <div className="overlay h-screen z-20 absolute"></div>
      <video
        src={videoBG}
        autoPlay
        loop
        muted
        playsInline
        className="h-screen z-10"
      ></video>
      <div className="content">
        <h1 className={pfvMov}>
        Pura vida familia
      </h1>
      </div>
    </div >
  )
}

Section1.propTypes = {
  scroll: PropTypes.number
}
export default Section1