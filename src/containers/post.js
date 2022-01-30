import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from '@reach/router'
import ReactMarkdown from "react-markdown";
import MetaTags from 'react-meta-tags';

export default function Post() {
  const { post } = useRouteData()
  return (
    <div>
      <MetaTags>
        <title>{post.title}</title>
      </MetaTags>
      <div className="section">
        <div className="container">
          <div className="content header-white">
            <div style={{textAlign: "center"}}>
              <h1 style={{fontSize: "50px"}}>{post.title}</h1>
            </div>
            <ReactMarkdown children={post.body}/>
          </div>
        </div>
      </div>
    </div>
  );
}
