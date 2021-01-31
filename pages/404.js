import Link from "next/link";
import styles from '../styles/error.module.scss'

export default function ErrorPage() {
    return (
        <>
            <h1 className={styles.error}> Error 404</h1>
            <p>Please <Link href='/'>go back</Link> to HomePgae</p>
        </>
    )
}