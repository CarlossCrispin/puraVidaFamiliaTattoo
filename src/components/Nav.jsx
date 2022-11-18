import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Switch } from './Switch'
// eslint-disable-next-line import/no-absolute-path
import { IoMdClose } from 'react-icons/io'
import { TbMenu } from 'react-icons/tb'
import img from '../../public/logo.jpg'
import icon1 from '../../public/craneo.png'
import icon2 from '../../public/plantilla.png'
import icon3 from '../../public/swallow.png'
import icon4 from '../../public/tatuaje.png'


export const Nav = ({ theme, setTheme }) => {
  const [openToogle, setOpenToogle] = useState(false)

  const Icon = useMemo(
    () => (!openToogle ? <IoMdClose size={40} /> : <TbMenu size={40} />),
    [openToogle]
  )
  const classRotation = classNames(
    openToogle
      ? 'transition duration-700 ease-in-out flex justify-center p-3 border-none text-red-600 bg-transparent  rounded-md hover:text-red-400 focus:outline-none dark:text-red-100 dark:hover:text-red-400 transition duration-150 ease-in-out md:hidden '
      : '-rotate-90 transition duration-700 ease-in-out flex justify-center p-3 border-none text-red-600 bg-transparent rounded-md hover:text-red-400 focus:outline-none  dark:text-red-100 dark:hover:text-red-400 transition duration-150 ease-in-out md:hidden '
  )

  const overOpen = classNames(
    openToogle
      ? 'text-slate-700 dark:text-slate-50 fixed top-0 w-full z-20'
      : 'text-slate-700 dark:text-slate-50 fixed top-0 w-full z-20'
  )

  const showNav = classNames(
    !openToogle
      ? 'transition duration-700 ease-in-out md:hidden h-screen'
      : '-translate-y-96 transition duration-700 ease-in-out md:hidden'
  )

  const handleToogleOpen = () => {
    setOpenToogle(!openToogle)
    console.log('====================================');
    console.log({ openToogle });
    console.log('====================================');
  }

  return (
    <div className={overOpen}>
      <nav className="py-2">
        <div className="w-full md:max-w-7xl mx-auto">
          <div className="flex justify-between">
            <button onClick={handleToogleOpen} className={classRotation}>
              {Icon}
            </button>
            <div className="flex items-center">
              {/* logo */}
              <div className="flex items-center">
                <a href="#section1">
                  <div className="h-12 w-12 md:h-24 md:w-24 bg-white border-2 md:border-4 border-red-400 rounded-full overflow-hidden p-2">

                    <img src={img} alt="logo" className="w-12 md:w-24" />
                  </div>
                </a>
                <a href="#section1">
                  <span className="text-3xl text-red-500 font-bold ml-2">PFV</span>
                </a>
              </div>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex ml-4 items-center space-x-5">
              <img src={icon1} alt="logo" className="w-8" />
              <a href="#section2" className="py-4 px-3 text-slate-900 dark:text-slate-100 uppercase hover:text-red-500 hover:scale-110 hover:font-semibold dark:hover:text-red-500 dark:hover:scale-110 dark:hover:font-semibold duration-300 ease-in-out">

                section2
              </a>
              <img src={icon2} alt="logo" className="w-8" />
              <a href="#section3" className="py-4 px-3 text-slate-900 dark:text-slate-100 uppercase hover:text-red-500 hover:scale-110 hover:font-semibold dark:hover:text-red-500 dark:hover:scale-110 dark:hover:font-semibold duration-300 ease-in-out">
                section3
              </a>
              <img src={icon3} alt="logo" className="w-8" />
              <a href="#section4" className="py-4 px-3 text-slate-900 dark:text-slate-100 uppercase hover:text-red-500 hover:scale-110 hover:font-semibold dark:hover:text-red-500 dark:hover:scale-110 dark:hover:font-semibold duration-300 ease-in-out">
                section4
              </a>
            </div>
            {/* <div>
              Pura vida familia
            </div> */}
            {/* secondary nav */}
            <div className="flex items-center"><Switch theme={theme} setTheme={setTheme} /></div>
          </div>

        </div>

        {/* mobile menu */}
        <div className={showNav}>
          <div className="flex items-center py-4 px-4"><img src={icon4} alt="icon1" className="w-8" /><a href="#section1" className="ml-2 text-light text-sm text-slate-800 dark:text-slate-50 uppercase hover:text-red-500 hover:scale-110 hover:font-semibold dark:hover:text-red-500 dark:hover:scale-110 dark:hover:font-semibold duration-300 ease-in-out">section 1</a></div>
          <div className="flex items-center py-4 px-4"><img src={icon1} alt="icon2" className="w-8" /><a href="#section2" className="ml-2 text-light text-sm text-slate-800 dark:text-slate-50 uppercase hover:text-red-500 hover:scale-110 hover:font-semibold dark:hover:text-red-500 dark:hover:scale-110 dark:hover:font-semibold duration-300 ease-in-out">section 2</a></div>
          <div className="flex items-center py-4 px-4"><img src={icon2} alt="icon3" className="w-8" /><a href="#section3" className="ml-2 text-light text-sm text-slate-800 dark:text-slate-50 uppercase hover:text-red-500 hover:scale-110 hover:font-semibold dark:hover:text-red-500 dark:hover:scale-110 dark:hover:font-semibold duration-300 ease-in-out">section 3</a></div>
          <div className="flex items-center py-4 px-4"><img src={icon3} alt="icon3" className="w-8" /><a href="#section4" className="ml-2 text-light text-sm text-slate-800 dark:text-slate-50 uppercase hover:text-red-500 hover:scale-110 hover:font-semibold dark:hover:text-red-500 dark:hover:scale-110 dark:hover:font-semibold duration-300 ease-in-out">section 4</a></div>
        </div>

      </nav>
    </div>
  )
}

Nav.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
}

export default Nav
