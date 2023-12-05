import { Html, Head, Main, NextScript } from 'next/document'
import { Copyright } from '@/stories/footer/copylight/Copyright'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Copyright year={2023} name={'kukv'} link={'https://github.com'} />
        <NextScript />
      </body>
    </Html>
  )
}
