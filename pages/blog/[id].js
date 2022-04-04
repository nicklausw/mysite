// pages/posts/[id].js

import fs from 'fs'

import ReactMarkdown from 'react-markdown'

import Header from "../../components/Header"
import Head from 'next/head'

import matter from 'gray-matter'

function Post({ post }) {
  // Render post...
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
      </Head>
      <Header/>
      <div className="section">
        <div className="container">
          <div className="content header-white has-text-white">
            <div style={{textAlign: "center"}}>
              <h1 className="mb-3" style={{fontSize: "50px"}}>{post.headerData.title}</h1>
              {post.headerData.subtitle !== undefined ? (
                <h1 className="mt-0" style={{fontSize: "35px"}}>{post.headerData.subtitle}</h1>
            ) : (<></>)}
            </div>

            <p className="has-text-weight-bold is-italic mb-2">
              Date created: {post.headerData.dateCreated}
            </p>
            {post.headerData.dateModified !== undefined ? (
              <p className="has-text-weight-bold is-italic mb-2">
                Date modified: {post.headerData.dateModified}
              </p>
            ) : (<></>)}
            <ReactMarkdown>{post.data}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const posts = fs.readdirSync("blog")
  var c = 0
  var paths = []
  while(c < posts.length) {
    paths.push({ params: { id: String(c) } })
    c++
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
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
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const post = await posts.filter(obj => {
    return obj.id === params.id
  })[0]

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post