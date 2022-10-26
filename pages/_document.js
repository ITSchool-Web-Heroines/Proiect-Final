import { Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link'

export default function Document() {
  return (
    <Html>
      <Head>
        <Link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" 
        ></Link>
        <Link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        rel="stylesheet">
          </Link>
        <Link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          rel="stylesheet"
          ></Link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
