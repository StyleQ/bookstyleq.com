import './globals.css'
import { Open_Sans } from 'next/font/google'
import cx from 'classnames'

const openSans = Open_Sans({ weight: '400', subsets: ['latin'] })

export const metadata = {
  title: 'StyleQ - Find professional stylists near you',
  description: 'Book in-home or office services with top barbers and beauty professionals instantly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" color="#a43f6a" href="/safari-pinned-tab.svg" />
        <link rel="manifest" crossOrigin="use-credentials" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="a43f6a" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={cx(openSans.className, "bg-brown-100 text-base")}>{children}</body>
    </html>
  )
}
