// Libraries imports
import { FC, ReactNode, useState, useEffect, CSSProperties } from 'react'
import { ClockLoader } from 'react-spinners'

// App level imports
import HeaderNavigationBar from './navigationBar/HeaderNavigationBar'

type BaseLayoutProps = {
  children: ReactNode
}

// Styles for the loading spinner
const override: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Layout: FC<BaseLayoutProps> = ({ children }) => {
  //const [hydrated, setHydrated] = useState(false)
  // Loading spinner state
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Just to demonstrate the loading spinner
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <ClockLoader color="#55c33c" cssOverride={override} />}

      {!isLoading && (
        <div>
          <HeaderNavigationBar />
          <section className="pages">{children}</section>
        </div>
      )}
    </>
  )
}

export default Layout
