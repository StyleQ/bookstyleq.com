import { Heading, Text } from '@/components/typography'
import Button from '@/components/button'

const Hero = () => {
  return (
    <div className="wrapper py-28 px-38 lg:px-40 lg:py-64 grid place-content-center text-center">
      <div className="grid place-content-center">
        <div>
          <Heading level={1} className="text-brown-300 mb-8 leading-snug lg:leading-none">
            Barbers on demand: Elevate your style effortlessly
          </Heading>
          <Text className="text-xl mb-16 leading-normal">
            Book same-day appointments for haircuts, grooming, and more, all from top-rated professionals near you.
            Say goodbye to the hassle of scheduling and waiting, and hello to effortless style and convenience.
          </Text>
          <Button is="primary" size='lg' href="#form-section">Request early access</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
