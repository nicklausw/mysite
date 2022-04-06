import fs from 'fs'
import path from 'path'

import Header from "../../components/Header"
import Link from 'next/link'

import matter from 'gray-matter'


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

function getPostsData() {
  const postsDir = path.join(process.cwd(), "blog")
  const postsPre = fs.readdirSync(postsDir)
  var c = 0
  const posts = postsPre.map((thisPost) => {
    var postBuffer = fs.readFileSync(path.join(process.cwd(), "blog/" + thisPost), "utf8")
    var postData = postBuffer!.toString()
    const matterData = matter(postData)
    const headerData = matterData.data
    c++
    return {id: String(c - 1), headerData}
  })
  return posts
}

// This also gets called at build time
export async function getStaticProps() {
  // Pass post data to the page via props
  const posts = getPostsData()
  return { props: { posts } }
}

export default Blog