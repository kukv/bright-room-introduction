import '@/styles/global.scss'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

config.autoAddCss = false
library.add(fab)

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app">
      <Head>
        <title>Bright-Room Introduction</title>
        <meta charSet="UTF-8" />
        <meta content="IE=edge" http-equiv="X-UA-Compatible" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default App
