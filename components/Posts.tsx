import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ParsedUrlQuery } from 'querystring'

export type PostObject = {
  title?: string;
  subtitle?: string;
  dateCreated?: string;
  dateModified?: string;
  data?: string;
  id?: string;
}

export interface PostParams extends ParsedUrlQuery {
  id: string
}

export function getPostsData(needsText: boolean): PostObject[] {
  const postsDir = path.join(process.cwd(), "blog")
  const postsPre = fs.readdirSync(postsDir)
  var c = 0
  const posts = postsPre.map((thisPost) => {
    var postBuffer = fs.readFileSync(path.join(process.cwd(), "blog/" + thisPost), "utf8")
    var postData = postBuffer!.toString()
    const matterData = matter(postData)
    const headerData = matterData.data
    const data = matterData.content
    c++
    if(needsText)
      return {id: String(c - 1), ...headerData, data}
    else
      return {id: String(c - 1), ...headerData}
  })
  return posts
}