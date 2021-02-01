// import App from 'next/app'
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/main.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <Component {...pageProps} />
        {/* <style jsx global>{`
            body {
                font-family: 'Roboto', sans-serif;
            }
        `}</style> */}
    </>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }