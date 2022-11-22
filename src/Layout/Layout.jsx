import { useEffect, useState } from "react"
import { Nav } from "../components/Nav"
import Section1 from "../pages/Section1"
import Section2 from "../pages/Section2"
import Section3 from "../pages/Section3"

export const Layout = () => {
  const [theme, setTheme] = useState('')
  const [scroll, setScroll] = useState(0);

  onscroll = () => {
    setScroll(Math.floor(window.scrollY))
  }

  useEffect(() => {
    if (window.matchMedia('(preferer-color-scheme : dark )').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className="h-full">
      <Nav theme={theme} setTheme={setTheme} scroll={scroll} />
      <Section1 scroll={scroll} />
      <Section2 scroll={scroll} />
      <Section3 scroll={scroll} />
      <div className="h-screen bg-slate-50 dark:bg-slate-900" id="section4">
        <div className="flex items-center justify-center py-64">
          <h1 className="text-5xl text-red-500 dark:text-slate-50">
            CONTACTO
          </h1>
        </div>
      </div>
      {/* <div className="h-screen bg-slate-50 dark:bg-slate-900" id="section4">
        <div className="flex items-center justify-center py-64">
          <h1 className="text-5xl text-red-500 dark:text-slate-50">
            contacto
          </h1>
        </div>
      </div> */}
    </div>
  )
}
