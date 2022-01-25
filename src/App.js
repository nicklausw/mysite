import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from '@reach/router'

import Header from 'components/header'

import 'mystyles.scss'

function App() {
  return (
    <Root>
      <Header></Header>
      <div className="has-background-black has-text-white">
        <React.Suspense fallback={<p className="is-size-3 is-italic has-text-white has-text-centered">Loading...</p>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
