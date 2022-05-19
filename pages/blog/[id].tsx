import ReactMarkdown from 'react-markdown'

import Page from "../../components/Page"
import { getPostsData, PostObject, PostParams } from "../../scripts/posts"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism"

import type { GetStaticPaths, GetStaticProps } from "next"

function Post({ post } : { post : PostObject }) {
  // Render post...
  return (
    <Page title={post.title} description={post.data}>
      <div className="flex justify-center mx-auto w-3/4 text-white">
        <div className="block w-full">
          <div className="text-center">
            <p className="mb-0 font-semibold leading-tight lg:leading-10" style={{fontSize: "50px"}}>{post.title}</p>
            {post.subtitle !== undefined ? (
              <p className="mt-0 mb-3 italic font-light leading-tight" style={{fontSize: "35px"}}>{post.subtitle}</p>
            ) : (<p className="mt-5 mb-3"></p>)}
          </div>
          <hr className="mt-0 mb-5"/>

          <p className="font-bold italic mb-2">
            Date created: {post.dateCreated}
          </p>
          {post.dateModified !== undefined ? (
            <p className="font-bold italic mb-2">
              Date modified: {post.dateModified}
            </p>
          ) : (<></>)}

          <ReactMarkdown 
          components={{
            p: ({node, ...props}) => <p className="my-4 text-lg" {...props} />,
            h1: ({node, ...props}) => <p className="mb-4 mt-6 text-3xl font-semibold" {...props} />,
            code({node, inline, className, children, ...props}) {
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
            }}}>{post.data!}
          </ReactMarkdown>
        </div>
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