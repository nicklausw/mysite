import React, { Component } from 'react'
import $ from 'jquery'

import '../css/mystyles.css'
import headshot from './pictures/headshot.jpg'
import haisten from './pictures/title.png'

function setDesktop() {
  if($(window).width() >= 960) {
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
$(document).ready(function() {
  setDesktop();
  $('#page').fadeIn(1000);
});
$(window).resize(setDesktop);

class App extends Component {
  render() {
    return (
      <section className="section" id="page">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9">
              <div className="content has-text-white has-text-centered">
                <p className="is-size-1 m-0 nameText">Nicklaus Willis</p>
                <p className="is-size-3 m-0 subText">Web Developer</p>
                <figure className="image mb-0 is-inline-block is-128x128">
                  <img className="is-rounded" src={headshot}/>
                </figure>
                <hr/>
                <div className="columns is-vcentered">
                  <div className="column is-6">
                    <div className="card has-background-grey has-text-black">
                      <div className="card-content">
                        <div className="media">
                          <div className="media-content">
                            <figure className="image">
                              <img className="is-rounded" src={haisten}/>
                            </figure>
                          </div>
                        </div>

                        <div className="content is-size-5">
                          I had the honor of making this website for a badass
                          journalist running for a badass position in a badass organization.
                          <br/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div className="card has-background-grey has-text-black">
                      <div className="card-content">
                        <p className="title mb-6 mt-5 is-3 has-text-black">iam.ilike</p>

                        <div className="content is-size-5">
                          Demonstration of my SQL skills. Will eventually be redone with analytics
                          to look at after taking the survey.
                          <br/>
                        </div>
                      </div>
                    </div>
                  </div>
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
