import React from 'react'
import { useRouteData } from 'react-static'
//
import { Link } from '@reach/router'

export default function Blog() {
  const { posts } = useRouteData()
  return (
    <div>
      <div className="section">
        <div className="container header-white has-text-centered is-size-3">
          All Posts:
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}