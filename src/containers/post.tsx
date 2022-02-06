import React from "react"
import { useRouteData, Head } from "react-static"
//
import { Link } from "@reach/router"
import ReactMarkdown from "react-markdown"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

export default function Post() {
  const { post } = useRouteData()
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="title" content={post.title}/>
        <meta name="description" content={post.body}/>
        <meta name="og:title" content={post.title}/>
        <meta name="og:description" content={post.body}/>
        <meta name="author" content="nicklausw"/>
      </Head>
      <div className="section">
        <div className="container">
          <div className="content header-white">
            <div style={{textAlign: "center"}}>
              <h1 style={{fontSize: "50px"}}>{post.title}</h1>
            </div>
            <p className="has-text-weight-bold is-italic mb-2">
              Date created: {post.created}
            </p>
            {post.modified !== undefined ? (
              <p className="has-text-weight-bold is-italic mb-2">
                Date modified: {post.modified}
              </p>
            ) : (<></>)}
            <ReactMarkdown children={post.body}
               components={{ code({node, inline, className, children, ...props}) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                }}}/>
          </div>
        </div>
      </div>
    </>
  );
}
