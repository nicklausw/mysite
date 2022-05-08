import ReactMarkdown from 'react-markdown'

import Page from "../../components/Page"
import { getPostsData, PostObject, PostParams } from "../../components/Posts"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

import type { GetStaticPaths, GetStaticProps } from "next"

function Post({ post } : { post : PostObject }) {
  // Render post...
  return (
    <Page title={post.title} description={post.data}>
      <div className="content header-white">
        <div style={{textAlign: "center"}}>
          <h1 className="mb-0 has-text-weight-semibold" style={{fontSize: "50px"}}>{post.title}</h1>
          {post.subtitle !== undefined ? (
            <h1 className="mt-0 mb-3 is-italic has-text-weight-light" style={{fontSize: "35px"}}>{post.subtitle}</h1>
          ) : (<h1 className="mt-5 mb-3"></h1>)}
        </div>
        <hr className="mt-0 mb-5"/>

        <p className="has-text-weight-bold is-italic mb-2">
          Date created: {post.dateCreated}
        </p>
        {post.dateModified !== undefined ? (
          <p className="has-text-weight-bold is-italic mb-2">
            Date modified: {post.dateModified}
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
        }}}>{post.data!}</ReactMarkdown>
      </div>
    </Page>
  )
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on posts
  const posts = getPostsData(false)
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
export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as PostParams;
  const posts = getPostsData(true)
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const post = posts.filter(obj => {
    return obj.id === params.id
  })[0]

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post