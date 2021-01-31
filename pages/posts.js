import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MainLayout } from '../components/MainLayout'

export default function Posts({ posts: serverPosts }) {
    const [posts, setPosts] = useState(serverPosts)

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:4500/posts')
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

Posts.getInitialProps = async ({ req }) => {
    if (!req) return { posts: null }
    const response = await fetch('http://localhost:4500/posts')
    const posts = await response.json()
    return {
        posts
    }
}


//posts
//post/42