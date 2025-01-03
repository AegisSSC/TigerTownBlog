import {json} from "@sveltejs/kit"
import type { Post } from '$lib/types'

async function getPosts() {
    let posts: Post[] = []

    const paths = import.meta.glob('/src/posts/*md', {
        eager: true})

    for (const path in paths){
        console.log(path)
        const file = paths[path]
        console.log(file)
        const slug = path.split('/').at(-1)?.replace('.md', '')
        console.log(slug)
        if (file && typeof file === 'object' && 'metadata' in file && slug){

            const metadata = file.metadata as Omit<Post, 'slug'>
            const post = {... metadata, slug} satisfies Post
            post.published && posts.push(post)
        }
    }

    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()    
    )
    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}