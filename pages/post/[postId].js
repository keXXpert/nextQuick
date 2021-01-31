import Link from "next/link";

export default function Post({ post }) {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href='/posts'>Back to Posts</Link>
        </>
    )
}

Post.getInitialProps = async ({ query }) => {
    const response = await fetch('http://localhost:4500/posts/' + query.postId)
    const post = await response.json()
    return {
        post
    }
}
