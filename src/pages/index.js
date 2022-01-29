import React, { Component } from 'react'
import { Link, Router } from '@reach/router'

import '../mystyles.scss'

import githubLogo from '../pictures/github-logo.png'

function haistenCard() {
  return (
    <div>
      <div className="media">
        <div className="media-content">
          <figure className="image mb-0">
            <a href="https://nicklausw.com/haisten/">
              <img className="is-rounded" src="https://nicklausw.com/haisten/pictures/title.png"/>
            </a>
          </figure>
        </div>
      </div>

      <div className="content is-size-5">
      <p className="has-text-weight-bold">I had the honor of making this website for one of the most respected journalists of this generation.</p>
      </div>
    </div>
  )
}

function iamilike() {
  return (
    <div>
      <p className="title is-3"><a className="has-text-black" href="https://nicklausw.com/iam.ilike.2/">iam.ilike</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Demonstration of my SQL skills. Will eventually be redone with analytics
        to look at after taking the survey.</p>
      </div>
    </div>
  )
}

function githubCard() {
  return (
    <div>
      <div className="media">
        <div className="media-content">
          <figure className="image mb-0">
            <a href="https://github.com/nicklausw/">
              <img style={{width:"15em"}} src={githubLogo}/>
            </a>
          </figure>
        </div>
      </div>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Take a look for yourself.</p>
      </div>
    </div>
  )
}

function ndsaCard() {
  return (
    <div>
      <p className="is-size-3 has-text-weight-bold mb-1"><a className="noHighlight" href="https://github.com/nicklausw/ndsa" target="_blank">NDSA - NDS C++ Engine</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Almost all homebrew coded for the Nintendo DS is in C. Here's a C++ header library incorporating an object system that demonstrates what everyone is missing out on.</p>
      </div>
    </div>
  )
}

function siteCard() {
  return (
    <div>
      <p className="is-size-3 has-text-weight-bold mb-2"><a className="noHighlight" href="https://github.com/nicklausw/mysite" target="_blank">This site is open source!</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Click the text above to see the source code. I always have and always will love and support the "open-source initiative."</p>
      </div>
    </div>
  )
}

function historyCard() {
  return (
    <div>
      <p className="is-size-3 has-text-weight-bold mb-2"><a className="noHighlight" href="/about" target="_blank">Read about my background!</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">See how this self-taught programmer came to be.</p>
      </div>
    </div>
  )
}

function Card(props) {
  return (
    <div className="column is-6">
      <div className="card has-text-black">
        <div className="card-content">
          {props.content}
        </div>
      </div>
    </div>
  )
}

// small note: e-mail is "e&#x2011;mail" to utilize the non-breaking hyphen.
export default () => (
  <section className="section pt-2 pb-4" id="page">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-9">
          <div className="content has-text-white has-text-centered">
            <p className="has-text-weight-bold mb-4" style={{fontSize: "50px"}}>Welcome to my space.</p>
            <hr className="mt-0"/>
            <div className="columns is-vcentered is-centered is-multiline">
              <Card content={haistenCard()}/>
              <Card content={iamilike()}/>
              <Card content={siteCard()}/>
              <Card content={ndsaCard()}/>
              <Card content={githubCard()}/>
              <Card content={historyCard()}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)