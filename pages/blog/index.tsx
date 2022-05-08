import Page from "../../components/Page"
import { PostObject, getPostsData } from "../../components/Posts"

import Link from 'next/link'
import type { GetStaticProps } from "next"

function Blog({ posts } : { posts : PostObject[] }) {
  // Render post...
  return (
    <>
      <Page title="nicklausw - blog">
        <div className="is-size-3">
          <p className="has-text-weight-bold has-text-centered mb-4" style={{fontSize: "50px"}}>blog</p>
          <hr className="mt-0"/>
          <ul style={{display:"flex", flexDirection: "column-reverse", listStyleType: "circle"}}>
          {posts.map(thisPost => {
            return (
            <li key={thisPost.id} style={{marginLeft:"1em"}}>
              <Link href={`blog/${thisPost.id}/`}>
                <a>{thisPost.dateCreated} - {thisPost.title}</a>
              </Link>
            </li>
            )
          })}
          </ul>
        </div>
      </Page>
    </>
  )
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  // Pass post data to the page via props
  const posts = getPostsData(false)
  return { props: { posts } }
}

export default Blog