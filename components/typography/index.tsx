import { Bree_Serif, Open_Sans } from 'next/font/google'
import cx from 'classnames'

const breeSerif = Bree_Serif({ weight: '400', subsets: ['latin'] })
const openSans = Open_Sans({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

type TextProps = {
  children: React.ReactNode,
  className?: string,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

type HeadingProps = {
  children: React.ReactNode,
  className?: string,
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export function Text({ children, as: Component = "p", ...props }: TextProps): JSX.Element {
  return (
    <Component {...props}>{children}</Component>
  )
}

export function Heading({ children, level, className = '', ...props }: HeadingProps) : JSX.Element {
  const headingClassName: string = cx(className, 'font-semibold leading-snug', {
    [breeSerif.className]: level === 1,
    [openSans.className]: level !== 1,
    'text-4xl': level === 1,
    'text-3xl': level === 2,
    'text-2xl': level === 3,
    'text-xl': level === 4,
    'text-lg': level === 5,
    'text-base': level === 6,
  })

  return (
    <Text as={`h${level}`} className={headingClassName} {...props}>{children}</Text>
  )
}
