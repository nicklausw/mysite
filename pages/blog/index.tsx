import Page from "../../components/Page"
import { PostObject, getPostsData } from "../../scripts/posts"

import Link from 'next/link'
import type { GetStaticProps } from "next"

function Blog({ posts } : { posts : PostObject[] }) {
  // Render post...
  return (
    <>
      <Page title="nicklausw - blog">
        <div className="flex justify-center mx-auto text-white w-3/4">
          <div className="block">
            <p className="font-bold text-center text-5xl">
              blog
            </p>
            <hr className="m-5"/>
            <ul style={{display:"flex", flexDirection: "column-reverse", listStyleType: "circle"}}>
            {posts.map(thisPost => {
              return (
              <li className="text-2xl leading-normal lg:leading-relaxed" key={thisPost.id} style={{marginLeft:"1em"}}>
                <Link href={`/blog/${thisPost.id}/`}>
                  <a>{thisPost.dateCreated} - {thisPost.title}</a>
                </Link>
              </li>
              )
            })}
            </ul>
          </div>
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