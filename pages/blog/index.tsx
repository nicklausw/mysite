import Header from "../../utils/Header"
import getPostsData from "../../utils/Posts"

import Link from 'next/link'

function Blog({ posts } : { posts : any }) {
  // Render post...
  var c = 0
  return (
    <>
      <Header title="nicklausw - blog"/>
      <div className="section">
        <div className="container header-white has-text-centered is-size-3">
          <ul style={{display:"flex", flexDirection: "column-reverse", listStyleType: "circle"}}>
          {posts.map(({thisPost} : {thisPost : any}) => {
            c++;
            return (
            <li key={posts[c-1].id}>
              <Link href={`blog/${posts[c-1].id}/`}>
                <a>{posts[c-1].headerData.dateCreated} - {posts[c-1].headerData.title}</a>
              </Link>
            </li>
            )
          })}
          </ul>
        </div>
      </div>
    </>
  )
}

// This also gets called at build time
export async function getStaticProps() {
  // Pass post data to the page via props
  const posts = getPostsData(false)
  return { props: { posts } }
}

export default Blog