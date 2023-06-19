import { Text, Heading } from "@/components/typography"
import Image from 'next/image'

const AVATAR_SIZE = 120

function Testimonial({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="bg-white text-gray-600 shadow-md rounded p-12">{children}</div>
  )
}

export default function Testimonials(): JSX.Element {
  return (
    <div className="mx-auto py-16 grid lg:grid-cols-3 gap-8">
      <Testimonial>
        <Image
          src="https://res.cloudinary.com/sq-assets/image/upload/v1687148132/aziz-abdullah_gjdg6e.jpg"
          alt="Aziz Abdulah"
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="inline-block rounded-full mb-8"
          priority
        />
        <Heading level={4} className="mb-4">Aziz Abdulah</Heading>
        <Text>Amazing service. Their success manager was very communicative about this
        first service. RJ came with a mask, executed with swiftness. He cleaned
        up after himself, wasn&apos;t awkward, and faded me exactly the way I asked.
        If you&apos;re considering using this service, just try it once. He came, he
        cut, he finished. Thank you StyleQ!</Text>
      </Testimonial>
      <Testimonial>
        <Image
          src="https://res.cloudinary.com/sq-assets/image/upload/v1687148509/tristan-plahmer_ub4osn.jpg"
          alt="Tristan Plahmer"
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="inline-block rounded-full mb-8"
          priority
        />
        <Heading level={4} className="mb-4">Tristan Plahmer</Heading>
        <Text>Outstanding friendly service! Stephanie, my stylist, was very helpful and
        professional. The travel feature was super helpful as the stylist will come to
        you, and you can get your haircut at the comfort of your home. I will definitely
        be back. Thank you for the awesome service!</Text>
      </Testimonial>
      <Testimonial>
        <Image
          src="https://res.cloudinary.com/sq-assets/image/upload/v1687148499/matt-kemper_rotsn7.jpg"
          alt="Matt Kemper"
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="inline-block rounded-full mb-8"
          priority
        />
        <Heading level={4} className="mb-4">Matt Kemper</Heading>
        <Text>I had a great haircut experience with this group. Great price, and it was done
        safely at my house! Will highly recommend for others to try this out.</Text>
      </Testimonial>
    </div>
  )
}
