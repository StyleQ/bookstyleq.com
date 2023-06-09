import Image from 'next/image'
import Button from '@/components/button'
import Icon from '@/components/icon'

const Navigation = () => (
  <nav className="flex gap-4 content-center">
    <Button variant="plain" href="https://blog.bookstyleq.com">Our blog</Button>
    <Button variant="secondary" href="/">Reserve a spot</Button>
  </nav>
)

const Socials = () => (
  <div className="flex gap-4 content-center">
    <a href="https://facebook.com/styleqapp">
      <Icon name="facebook" />
    </a>
    <a href="https://twitter.com/styleqapp">
      <Icon name="twitter" />
    </a>
    <a href="https://instagram.com/styleqapp">
      <Icon name="instagram" />
    </a>
  </div>
)

export default function Home() {
  const date = new Date()
  return (
    <>
      <header className="bg-brown-900 text-white">
        <div className="container mx-auto px-4 py-6 border-b border-translucent_light flex justify-between content-center">
          <a href="/">
            <Image
              src="/styleq.svg"
              alt="StyleQ"
              width={120}
              height={40}
              priority
            />
          </a>
          <Navigation />
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, consequuntur?</p>
      </header>
      <section>
        <h3>Middle content</h3>
      </section>
      <footer className="bg-brown-900 text-white">
        <div className="container mx-auto px-4 py-8 flex justify-between content-center">
          <div>&copy; {date.getFullYear()} StyleQ. All rights reserved</div>
          <Socials />
        </div>
      </footer>
    </>
  )
}
