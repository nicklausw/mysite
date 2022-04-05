import {promises as fs} from 'fs'
import path from 'path'

import ReactMarkdown from 'react-markdown'

import Header from "../../components/Header"
import Head from 'next/head'

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

import matter from 'gray-matter'

function Post({ post } : { post : any}) {
  // Render post...
  return (
    <>
      <Header title={post.headerData.title} description={post.headerData.description}/>
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
            <ReactMarkdown components={{ code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  {...props}
                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }}}>{post.data}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const posts = await fs.readdir("blog")
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
export async function getStaticProps({ params } : { params : any }) {
  const postsDir = path.join(process.cwd(), "blog")
  const postsPre = await fs.readdir(postsDir)
  var c = 0
  const posts = postsPre.map(async (thisPost) => {
    var postBuffer = await fs.readFile(path.join(process.cwd(), "blog/" + thisPost), "utf8")
    var postData = postBuffer!.toString()
    const matterData = matter(postData)
    const headerData = matterData.data
    c++
    return {id: String(c - 1), headerData, data: matterData.content}
  })
  const awaitedPosts = await Promise.all(posts)
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const post = awaitedPosts.filter(obj => {
    return obj.id === params.id
  })[0]

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post