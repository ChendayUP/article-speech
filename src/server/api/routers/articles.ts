
// import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
// import { filterUserForClient } from "~/server/helpers/filterUserForClient";
import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType from "~/interfaces/post";
const postsDirectory = join(process.cwd(), '_articles')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string) {
  if (!slug) {
    return {}
  }
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  console.log('articles data, content ', data, content);
  
  type Items = {
    [key: string]: string
  }

  const items: Items = {
    ...data
  }
  items.slug = realSlug
  items.content = content

  // Ensure only the minimal needed data is exposed
  // fields.forEach((field) => {
  //   if (field === 'slug') {
  //     items[field] = realSlug
  //   }
  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  return items
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  console.log('articles slugs ', slugs);
  
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => ((post1.date || '') > (post2.date || '') ? -1 : 1))
  return posts
}

export const articlesRouter = createTRPCRouter({
  getAllPosts: publicProcedure
    .query(async () => {
      return getAllPosts()
    }),
    getPostBySlug: publicProcedure
    .input(z.object({slug: z.string()}))
    .query(async ({ctx, input}) => {
      return getPostBySlug(input.slug)
    })
});
