// Libraries imports
import { FC, ReactNode, useState, useEffect } from 'react'

// App level imports
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar'

type BaseLayoutProps = {
  children: ReactNode
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  const [hydrated, setHydrated] = useState(false)

  // The purpose of this useEffect() is to ensure that the app is fully hydrated. This is necessary because the server-side rendering process can cause errors if the app is not hydrated before rendering.

  // The first render is what the server uses to generate the HTML file and is also what the client-side app will use for the "hydration" process.

  // During this first run, hydrated will have the default value of false, which will cause the component to return null. Also in this first run, useEffect() will call setHydrated(true), which will trigger a second render after the first has completed.

  // By the time the second render runs, the app will already be hydrated, so there is no need to worry about the errors occurring anymore. At this point hydrated will be true.

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) {
    return null
  }

  return (
    <>
      <HeaderNavigationBar />
      <section className="pages">{children}</section>
    </>
  )
}

export default Layout
