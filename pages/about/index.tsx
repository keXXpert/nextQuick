import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"

export default function About() {
    const clickHandler = () => {
        Router.push('/')
    }

    return <MainLayout title={'About Page'}>
        <h1>About page</h1>

        <button onClick={clickHandler}>Back to HomePage</button>
        <button onClick={() => Router.push('/posts')}>Posts</button>
        <p>lorem ipsum</p>
    </MainLayout>
}