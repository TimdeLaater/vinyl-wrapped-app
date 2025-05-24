import { useEffect } from '@lynx-js/react'
import { Dashboard } from './pages/Dashboard'

export function App(props: {
  onMounted?: () => void
}) {
  useEffect(() => {
    console.info('Hello, Vinyl Wrapped')
    props.onMounted?.()
  }, [])

  return <Dashboard />
}
