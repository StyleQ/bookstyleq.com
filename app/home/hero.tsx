import { Heading, Text } from '@/components/typography'
import Button from '@/components/button'

const Hero = () => {
  return (
    <div className="wrapper py-28 px-38 lg:px-52 lg:py-52 grid place-content-center text-center">
      <div className="grid place-content-center">
        <div>
          <Heading level={1} className="text-brown-300 mb-8">
            BARBERS ON DEMAND
          </Heading>
          <Text className="text-xl mb-16">
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
