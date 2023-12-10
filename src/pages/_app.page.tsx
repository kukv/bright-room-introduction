import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false
library.add(fab)

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
