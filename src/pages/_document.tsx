import { Html, Head, Main, NextScript } from "next/document"

import Header from "@/pages/components/header/Header"

export default function Document() {
  return (
    <Html lang="ko-KR">
      <Head />
      <Header />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
