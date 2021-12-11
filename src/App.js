import React, { Component } from 'react'
import $ from 'jquery'

import '../css/mystyles.css'
import headshot from './pictures/headshot.jpg'

function setDesktop() {
  if($(window).width() >= 1200) {
    $(".nameText").addClass("has-text-left");
    $(".nameText").addClass("no-height");
    $(".subText").addClass("has-text-right");
    $(".subText").addClass("mt-3");
  } else {
    $(".nameText").removeClass("has-text-left");
    $(".nameText").removeClass("no-height");
    $(".subText").removeClass("has-text-right");
    $(".subText").removeClass("mt-3");
  }
}

// on document load, set size and fade in
$(function() {
  setDesktop();
  $('#page').fadeIn(1000);
});

$(window).on("resize", setDesktop);

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
        I had the honor of making this website for a badass
        journalist running for a badass position in a badass organization.
      </div>
    </div>
  )
}

function iamilike() {
  return (
    <div>
      <p className="title mb-6 mt-5 is-3 has-text-black"><a href="https://nicklausw.com/iam.ilike.2/">iam.ilike</a></p>

      <div className="content is-size-5">
        Demonstration of my SQL skills. Will eventually be redone with analytics
        to look at after taking the survey.
      </div>
    </div>
  )
}

function Card(props) {
  return (
    <div className="column is-6">
      <div className="card has-background-grey has-text-black">
        <div className="card-content">
          {props.content}
        </div>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <section className="section" id="page">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9">
              <div className="content has-text-white has-text-centered">
                <p className="is-size-1 m-0 nameText">Nicklaus Willis</p>
                <p className="is-size-3 m-0 subText">Web Developer / <a href="javascript:location='mailto:\u006e\u0040\u006e\u0069\u0063\u006b\u006c\u0061\u0075\u0073\u0077\u002e\u0063\u006f\u006d';void 0">e-mail</a> / <a href="tel:7708289753">phone</a></p>
                <figure className="image mb-0 is-inline-block mainImage">
                  <img className="is-rounded" src={headshot}/>
                </figure>
                <hr/>
                <div className="columns is-vcentered">
                  <Card content={haistenCard()}/>
                  <Card content={iamilike()}/>
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
