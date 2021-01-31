import {useRouter} from 'next/router'

export default function Post() {
    const router = useRouter()

    return (
        <h1>Post {router.query.postId}</h1>   
    )
}