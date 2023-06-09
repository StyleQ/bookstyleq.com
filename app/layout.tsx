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
      <body className={cx(openSans.className, "bg-brown-100")}>{children}</body>
    </html>
  )
}
