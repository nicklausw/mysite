import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from '@reach/router'
import { Helmet } from "react-helmet"

import Header from 'components/header'

import 'mystyles.scss'

function App() {
  return (
    <Root>
      <Helmet>
        <title>nicklausw</title>
        <meta name="title" content="nicklausw"/>
        <meta name="description" content="Web developer in Marietta, GA."/>
        <meta property="og:image" content="https://www.nicklausw.com/embed.svg"/>
      </Helmet>
      <Header></Header>
      <div className="has-background-black has-text-white">
        <React.Suspense fallback={<p className="is-size-2 has-text-white has-text-centered pt-6">loading...</p>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
