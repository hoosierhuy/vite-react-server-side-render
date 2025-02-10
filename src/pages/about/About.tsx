// Library imports
import { JSX } from 'react'

// App level imports
import { BaseLayout } from '../../components'

export const About = (): JSX.Element => {
  return (
    <BaseLayout>
      <h3>About Us</h3>
      We're all about React server-side rendering 📟.
    </BaseLayout>
  )
}
