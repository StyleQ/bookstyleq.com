import Image from 'next/image'
import Button from '@/components/button'
import { Heading, Text } from '@/components/typography'
import Hero from './home/hero'
import Navigation from './home/navigation'
import Testimonials from './home/testimonials'

export default function Home() {
  return (
    <>
      <header className="bg-blue-500 text-white">
        <div className="wrapper py-6 border-b border-translucent_light flex justify-between content-center">
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
        <Hero />
      </header>
      <section className="wrapper py-40" id="form-section">
        <div className="grid lg:grid-cols-2">
          <div className="p-2 lg:p-8 grid place-content-center">
            <div>
              <Heading level={3} className="text-brown-700 mb-4">
                Be the first to experience the future of beauty and wellness
              </Heading>
              <Text className="text-lg mb-6">
                Stay up to date on our progress. Be the first to know when we launch in your city,
                make new feature releases, offerings, and event announcements.
              </Text>
            </div>
          </div>
          <div className="p-2 lg:pg-8">
            <form method="post" action="https://app.convertkit.com/forms/5261820/subscriptions" className="bg-white shadow-md rounded p-8">
              <input type="text" name="fields[name]" placeholder="Name" className="w-full mb-4 p-4 border border-gray-200 rounded" />
              <input type="email" name="email_address" placeholder="Email" className="w-full mb-4 p-4 border border-gray-200 rounded" />
              <input type="text" name="fields[zip_code]" placeholder="Zip Code" className="w-full mb-4 p-4 border border-gray-200 rounded" />
              <Button variant="tertiary" size="full">Join the waitlist</Button>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-blue-500 text-white">
        <div className="wrapper py-20 text-center">
          <Heading level={3}>What our customers are saying</Heading>
          <Testimonials />
        </div>
      </section>
    </>
  )
}
