// Library imports
import { JSX } from 'react'

// App level imports
import BaseLayout from '../../components/layout/BaseLayout'

export const About = (): JSX.Element => {
  return (
    <BaseLayout>
      <h1>About Us</h1>
      We're all about React server-side rendering 📟.
    </BaseLayout>
  )
}
