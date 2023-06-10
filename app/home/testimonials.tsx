import { Text } from "@/components/typography"

function Testimonial({ children }: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="bg-white text-gray-600 shadow-md rounded p-12 grid place-content-center">{children}</div>
  )
}

export default function Testimonials(): JSX.Element {
  return (
    <div className="mx-auto py-16 grid lg:grid-cols-3 gap-8">
      <Testimonial>
        <Text>Amazing service. Their success manager was very communicative about this
        first service. RJ came with a mask, executed with swiftness. He cleaned
        up after himself, wasn&apos;t awkward, and faded me exactly the way I asked.
        If you&apos;re considering using this service, just try it once. He came, he
        cut, he finished. Thank you StyleQ!</Text>
      </Testimonial>
      <Testimonial>
        <Text>Outstanding friendly service! Stephanie, my stylist, was very helpful and
        professional. The travel feature was super helpful as the stylist will come to
        you, and you can get your haircut at the comfort of your home. I will definitely
        be back. Thank you for the awesome service!</Text>
      </Testimonial>
      <Testimonial>
        <Text>I had a great haircut experience with this group. Great price, and it was done
        safely at my house! Will highly recommend for others to try this out.</Text>
      </Testimonial>
    </div>
  )
}
