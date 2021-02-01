import { NextPageContext } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MainLayout } from '../components/MainLayout'
import { MyPost } from '../types/posts'

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(process.env.API_URL + '/posts')
            const json = await response.json()
            setPosts(json)
        }

        if (!serverPosts) fetchPosts()
    }, [])

    return <MainLayout title={'Posts'}>
        {posts && posts.length
            ? <>
                <h1>Posts page</h1>
                <ul>
                    {posts && posts.map(post => (
                        <li key={post.id}>
                            <Link href={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
            : 'Loading...'}
    </MainLayout>
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) return { posts: null }
    const response = await fetch(process.env.API_URL + '/posts')
    const posts: MyPost[] = await response.json()
    return {
        posts
    }
}


//posts
//post/42