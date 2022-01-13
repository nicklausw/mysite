import React, { Component } from 'react'

import 'mystyles.scss'

import headshot from './pictures/nick.jpeg'
import githubLogo from './pictures/github-logo.png'

// https://stackoverflow.com/questions/13733912/javascript-fade-in-fade-out-without-jquery-and-css3
function fadeIn( elem, ms )
{
  if( ! elem )
    return;

  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "flex";
  elem.style.visibility = "visible";

  if( ms )
  {
    var opacity = 0;
    var timer = setInterval( function() {
      opacity += 50 / ms;
      if( opacity >= 1 )
      {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50 );
  }
  else
  {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}

if(typeof window !== 'undefined') {
  window.addEventListener('load', function(event) {
    fadeIn(document.getElementById("page"), 800);
  }); 
}

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
      <p className="title mb-6 mt-5 is-3"><a className="has-text-black" href="https://nicklausw.com/iam.ilike.2/">iam.ilike</a></p>

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

function siteCard() {
  return (
    <div>
      <p className="is-size-3 has-text-weight-bold mt-3"><a className="noHighlight" href="https://github.com/nicklausw/mysite" target="_blank">This site is open source!</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Click the text above to see the source code. I always have and always will love and support the "open-source initiative."</p>
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
class App extends Component {
  render() {
    return (
      <section className="section pt-2 pb-4" id="page">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9">
              <div className="content has-text-white has-text-centered">
                <p className="is-size-1 m-0 nameText">Nicklaus Willis</p>
                <p className="is-size-3 m-0 subText">Web Developer / <a href="javascript:location='mailto:\u006e\u0040\u006e\u0069\u0063\u006b\u006c\u0061\u0075\u0073\u0077\u002e\u0063\u006f\u006d';void 0">e&#x2011;mail</a> / <a href="tel:7708289753">phone</a></p>
                <figure className="image mb-0 mt-4 is-inline-block mainImage">
                  <img src={headshot}/>
                </figure>
                <hr className="mt-0"/>
                <div className="columns is-vcentered is-multiline">
                  <Card content={haistenCard()}/>
                  <Card content={iamilike()}/>
                  <Card content={siteCard()}/>
                  <Card content={githubCard()}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App
