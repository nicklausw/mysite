import Header from "../../components/Header"
import getPostsData from "../../components/Posts"

import Link from 'next/link'

function Blog({ posts } : { posts : any }) {
  // Render post...
  var c = 0
  return (
    <>
      <Header title="nicklausw - blog"/>
      <div className="section pt-2 pb-4">
        <div className="container header-white is-size-3">
          <p className="has-text-weight-bold has-text-centered has-text-white mb-4" style={{fontSize: "50px"}}>blog</p>
          <hr className="mt-0"/>
          <ul style={{display:"flex", flexDirection: "column-reverse", listStyleType: "circle"}}>
          {posts.map(({thisPost} : {thisPost : any}) => {
            c++;
            return (
            <li key={posts[c-1].id} style={{marginLeft:"1em"}}>
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