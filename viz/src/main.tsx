/**
 * @file:	main.tsx
 * @author:	Jacob Xie
 * @date:	2023/09/03 08:18:35 Sunday
 * @brief:
 **/

import {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  BrowserRouter as Router,
} from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import routes from "~react-pages"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <Router>
    <Suspense fallback={<p>Loading...</p>}>
      <App routes={routes} />
    </Suspense>
  </Router>,
)
