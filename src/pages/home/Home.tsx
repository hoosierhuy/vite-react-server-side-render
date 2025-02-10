// Library imports
import { JSX } from 'react'

// App level imports
import BaseLayout from '../../components/layout/BaseLayout'

export const Home = (): JSX.Element => {
  return (
    <BaseLayout>
      <h3>Home</h3>
      Home, sweet home 🏠.
    </BaseLayout>
  )
}
