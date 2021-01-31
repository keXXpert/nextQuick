import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'

export default function Posts({ posts }) {
    // const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     async function fetchPosts() {
    //         const response = await fetch('http://localhost:4500/posts')
    //         const json = await response.json()
    //         setPosts(json)
    //     }

    //     fetchPosts()
    // }, [])

    return <MainLayout title={'Posts'}>
        <h1>Posts page</h1>
        <ul>
            {posts && posts.map(post => (
                <li key={post.id}>
                    <Link href={`/post/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    </MainLayout>
}

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4500/posts')
    const posts = await response.json()
    return {
        posts
    }
}


//posts
//post/42