import Header from '../components/Header'

import Link from 'next/link'

function haistenCard() {
  return (
    <>
      <div className="media">
        <div className="media-content">
          <figure className="image mb-0">
            <a href="https://nicklausw.com/haisten/">
              <img alt="Haisten for SPJ Logo" className="is-rounded" src="https://nicklausw.com/haisten/pictures/title.png"/>
            </a>
          </figure>
        </div>
      </div>

      <div className="content is-size-5">
      <p className="has-text-weight-bold">I had the honor of making this website for one of the most respected journalists of this generation.</p>
      </div>
    </>
  )
}

function comparseCard() {
  return (
    <>
      <p className="title is-3"><a className="has-text-black" href="https://github.com/nicklausw/comparse">Comparse: It&apos;s COBOL</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">That&apos;s right! Here&apos;s a math parser written with GnuCOBOL. It interfaces with C to create a Discord bot.</p>
      </div>
    </>
  )
}

function wordbotCard() {
  return (
    <>
      <p className="title is-3"><a className="has-text-black" href="https://github.com/nicklausw/wordbot">Wordbot</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Discord bot that tracks word usage among users in a database. Demonstrates proficiency with TypeScript and MySQL/MariaDB.</p>
      </div>
    </>
  )
}

function githubCard() {
  return (
    <>
      <div className="media">
        <div className="media-content">
          <figure className="image mb-0">
            <a href="https://github.com/nicklausw/">
              <img alt="GitHub Logo" style={{width:"15em"}} src="pictures/GitHub_Logo.png"/>
            </a>
          </figure>
        </div>
      </div>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Take a look for yourself.</p>
      </div>
    </>
  )
}

function ndsaCard() {
  return (
    <>
      <p className="is-size-3 has-text-weight-bold mb-1"><a className="has-text-black" href="https://github.com/nicklausw/ndsa" target="_blank" rel="noreferrer">NDSA - NDS C++ Engine</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">A good amount of homebrew coded for the Nintendo DS is in C. Here&apos;s a C++ header library incorporating an object system that demonstrates what everyone is missing out on.</p>
      </div>
    </>
  )
}

function siteCard() {
  return (
    <>
      <p className="is-size-3 has-text-weight-bold mb-2"><a className="has-text-black" href="https://github.com/nicklausw/mysite" target="_blank" rel="noreferrer">This site is open source!</a></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Click the text above to see the source code. I always have and always will love and support the &quot;open-source initiative.&quot;</p>
      </div>
    </>
  )
}

function blogCard() {
  return (
    <>
      <p className="is-size-3 has-text-weight-bold mb-2"><Link href="/blog/"><a className="has-text-black">Read the blog!</a></Link></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">I give updates on whatever it is I&apos;m working on. Read all about it.</p>
      </div>
    </>
  )
}

function resumeCard() {
  return (
    <>
      <p className="is-size-3 has-text-weight-bold mb-2"><Link href="/resume.pdf"><a className="has-text-black">My Résumé</a></Link></p>

      <div className="content is-size-5">
        <p className="has-text-weight-bold">Hire me.</p>
      </div>
    </>
  )
}

function Card(props: any) {
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

export default function indexPage() {
  return (
    <>
      <Header/>
      <div className="section pt-2 pb-4" id="page">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-9">
              <div className="content has-text-white has-text-centered">
                <p className="has-text-weight-bold mb-4" style={{fontSize: "50px"}}>Welcome to my space.</p>
                <hr className="mt-0"/>
                <div className="columns is-vcentered is-centered is-multiline">
                  <Card content={haistenCard()}/>
                  <Card content={wordbotCard()}/>
                  <Card content={comparseCard()}/>
                  <Card content={ndsaCard()}/>
                  <Card content={siteCard()}/>
                  <Card content={githubCard()}/>
                  <Card content={blogCard()}/>
                  <Card content={resumeCard()}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}