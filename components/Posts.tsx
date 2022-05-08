import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ParsedUrlQuery } from 'querystring'

// grabbed from markdown via gray-matter
type PostData = {
  title: string;
  subtitle?: string;
  dateCreated: string;
  dateModified?: string;
  data?: string;
}

// assigned to each blog post grabbed
export type PostObject = PostData & {
  id: string;
}

// this is passed to each blog post page (corresponding post data to ID is grabbed)
export interface PostParams extends ParsedUrlQuery {
  id: string;
}

export function getPostsData(needsText: boolean): PostObject[] {
  const postsDir = path.join(process.cwd(), "blog");
  const postsPre = fs.readdirSync(postsDir);
  var c = 0;
  const posts = postsPre.map((thisPost) => {
    var postBuffer = fs.readFileSync(path.join(process.cwd(), "blog/" + thisPost), "utf8");
    var postData = postBuffer!.toString();
    const matterData = matter(postData);
    const headerData = matterData.data as PostData;
    const data = matterData.content;
    c++;
    if(needsText)
      return {id: String(c - 1), ...headerData, data};
    else
      return {id: String(c - 1), ...headerData};
  })
  return posts;
}