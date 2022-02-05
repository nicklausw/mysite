import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from '@reach/router'
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";


export default function Post() {
  const { post } = useRouteData()
  return (
    <React.Fragment>
      <Helmet>
        <title>{post.title}</title>
        <meta name="title" content={post.title}/>
        <meta name="description" content={post.body}/>
        <meta name="og:title" content={post.title}/>
        <meta name="og:description" content={post.body}/>
        <meta name="author" content="nicklausw"/>
      </Helmet>
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
            ) : (<div></div>)}
            <ReactMarkdown children={post.body}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
