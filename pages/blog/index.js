// pages/posts/[id].js

import fs from 'fs'

import ReactMarkdown from 'react-markdown'

import Header from "../../components/Header"
import Head from 'next/head'
import Link from 'next/link'

import matter from 'gray-matter'

function Post({ posts }) {
  // Render post...
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
      </Head>
      <Header/>
      <div className="section">
        <div className="container header-white has-text-centered is-size-3">
          <ul style={{display:"flex", flexDirection: "column-reverse"}}>
          {posts.map(thisPost => {
            return (
              <li key={thisPost.id}>
                <Link href={`blog/${thisPost.id}`}>
                  <a>{thisPost.headerData.title}</a>
                </Link>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    </>
  )
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const postsPre = fs.readdirSync("blog")
  var c = 0
  var posts = []
  while (c < postsPre.length) {
    var postData = fs.readFileSync("blog/" + postsPre[c]).toString()
    const matterData = matter(postData)
    const headerData = matterData.data
    posts.push({id: String(c), headerData, data: matterData.content})
    c++
  }

  // Pass post data to the page via props
  return { props: { posts } }
}

export default Post