import Image from 'next/image'
import { Heading } from "@/components/typography"
import Button from "@/components/button"

export default function Thanks() {
  return (
    <div className="bg-blue-500 text-white px-8 py-52 min-h-screen text-center h-full grid place-content-center">
      <div>
        <Image
          src="/styleq.svg"
          alt="StyleQ"
          width={240}
          height={80}
          className="mx-auto mb-8"
          priority
        />
        <Heading level={1} className="mb-4">Thank you for signing up</Heading>
        <p>We will be in touch with updates</p>
        <Button is="secondary" href="/" className="mt-8">Keep exploring our website</Button>
      </div>
    </div>
  )
}
