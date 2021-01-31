import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";

export default function Post({ post: serverPost }) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4500/posts/' + router.query.postId)
            const data = await response.json()
            setPost(data)
        }

        if (!serverPost) load()
    }, [])

    return (
        <MainLayout>
            {post
                ? <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
                : 'Loading...'}
            <Link href='/posts'>Back to Posts</Link>
        </MainLayout>
    )
}

// Post.getInitialProps = async ({ query, req }) => {
//     if (!req) {
//         return { post: null }
//     }
//     const response = await fetch('http://localhost:4500/posts/' + query.postId)
//     const post = await response.json()
//     return {
//         post
//     }
// }

export async function getServerSideProps({ query, req }) {
    if (!req) {
        return { post: null }
    }
    const response = await fetch('http://localhost:4500/posts/' + query.postId)
    const post = await response.json()
    return {
        props: {
            post
        }
    }
}