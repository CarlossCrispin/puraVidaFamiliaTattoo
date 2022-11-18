import { useMemo, useState } from 'react'

import PropTypes from 'prop-types'
import { MdLightMode, MdModeNight } from 'react-icons/md'

export const Switch = ({ theme, setTheme }) => {
  const [night, setNight] = useState(false)

  const handleThemeSwitch = () => {
    setNight(!night)
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }

  const Icon = useMemo(
    () => (night ? <MdModeNight size={25} /> : <MdLightMode size={25} />),
    [night]
  )
  return (
      <button
        type="button"
        aria-label="Color Mode"
        onClick={handleThemeSwitch}
        className="flex justify-center p-3 border-none text-red-600 bg-red-200 hover:bg-red-200 rounded-md hover:text-red-400 focus:outline-none focus:bg-red-100 dark:text-red-100 dark:bg-red-500 dark:hover:bg-red-700 dark:hover:text-red-400 transition duration-150 ease-in-out"
      >
        <span>{Icon}</span>
      </button>
  )
}

Switch.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
}