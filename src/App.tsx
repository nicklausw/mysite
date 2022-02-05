import React from "react"
import { Root, Routes, addPrefetchExcludes, Head } from "react-static"
//
import { Link, Router } from "@reach/router"

import Header from "./components/header"

import "styles.scss"

function App() {
  return (
    <Root>
      <Head>
        <title>nicklausw</title>
        <meta name="title" content="nicklausw"/>
        <meta name="description" content="Nicklaus Willis, web developer in Marietta, GA."/>
        <meta name="og:title" content="nicklausw"/>
        <meta name="og:description" content="Nicklaus Willis, web developer in Marietta, GA."/>
        <meta property="og:image" content="https://www.nicklausw.com/embed.webp"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <Header/>
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
