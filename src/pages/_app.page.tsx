import '@/styles/global.scss'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'

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
