// main.jsx - where root node is applied
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Expressions from './Expressions.jsx'
//App.jsx is just an example of a component

createRoot(document.getElementById('root')).render(
  <StrictMode> {/* dev mode only, helps with bugs*/}
    <App /> {/* main or first component */}
    <Expressions />
  </StrictMode>,
)
// createRoot(get the root element from document).render(elements or components);
// you can render elements, components, and or fragments
// there can only be 1 parent argument (any of the above as well)

