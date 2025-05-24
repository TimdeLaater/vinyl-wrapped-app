import { root } from '@lynx-js/react'
import './index.css'
import { App } from './App.jsx'

root.render(<App />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
