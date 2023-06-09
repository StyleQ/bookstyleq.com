import { Bree_Serif } from 'next/font/google'
import cx from 'classnames'

const breeSerif = Bree_Serif({ weight: '400', subsets: ['latin'] })

export function Text({ children, as: Component = "p", ...props }: {
  children: React.ReactNode,
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}) {
  return (
    <Component {...props}>{children}</Component>
  )
}

export function Heading({ children, level, className = '', ...props }: {
  children: React.ReactNode,
  level: 1 | 2 | 3 | 4 | 5 | 6,
  className?: string
}) {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  const headingClassName = cx(breeSerif.className, className)

  return (
    <Component className={headingClassName} {...props}>{children}</Component>
  )
}
