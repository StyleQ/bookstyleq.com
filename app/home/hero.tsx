'use client'
import { useState, useEffect } from 'react'
import { Heading, Text } from '@/components/typography'
import Toggle from '@/components/toggle'
import Image from 'next/image'
import Button from '@/components/button'
import cx from 'classnames'

const Hero = () => {
  const [clientMode, setClientMode] = useState(true)

  return (
    <div className="wrapper pt-32 pb-24 grid place-content-center">
      <div className="grid gap-12 lg:gap-0 lg:grid-cols-2 text-center lg:text-left">
        <div className="grid place-content-center">
          <div>
            <Heading level={1} className={cx("text-brown-300 mb-4", {
              'opacity-0 h-0 mb-0 overflow-hidden': !clientMode,
              'h-auto': clientMode
            })}>
              The ultimate destination for<br /> on-demand beauty and wellness services
            </Heading>
            <Heading level={1} className={cx("text-brown-300 mb-4", {
              'opacity-0 h-0 mb-0 overflow-hidden': clientMode,
              'h-auto': !clientMode
            })}>
              Service where you want, make what you need
            </Heading>
            <Text className={cx("text-lg mb-6", {
              'opacity-0 h-0 mb-0 overflow-hidden': !clientMode,
              'h-auto': clientMode
            })}>
              Book same-day appointments for haircuts, grooming, and more, all from top-rated professionals near you.
              Say goodbye to the hassle of scheduling and waiting, and hello to effortless style and convenience.
            </Text>
            <Text className={cx("text-lg mb-6", {
              'opacity-0 h-0 mb-0 overflow-hidden': clientMode,
              'h-auto': !clientMode
            })}>
              StyleQ gives you the flexibility to work with clients whenever, wherever.
            </Text>
            <Button variant="secondary" size="lg" href="#form-section">Request early access</Button>
          </div>
        </div>
        <div className="grid place-content-center">
          {
            clientMode ? (
              <Image src="https://res.cloudinary.com/strich/image/upload/v1686706785/client-feature-highlight_fz1fp7.png" width={400} height={576} alt="Feature highlight" />
            ) : (
              <Image src="https://res.cloudinary.com/strich/image/upload/v1686706784/stylist-feature-highlight_s1fk7m.png" width={400} height={576} alt="Feature highlight" />
            )
          }
        </div>
      </div>
      <div className="px-8 pb-0 pt-16 mx-auto text-center">
        <Toggle
          checked={clientMode}
          onClick={() => setClientMode(!clientMode)}
          buttons={{
            checked: { label: 'Clients', className: cx('relative', {
              'text-gray-100': clientMode,
              'text-gray-800' : !clientMode,
            }) },
            unchecked: { label: 'Stylists', className: cx('relative', {
              'text-gray-100': !clientMode,
              'text-gray-800' : clientMode,
            }) },
          }}
          thumbClassName="bg-brown-600"
          className="bg-brown-100"
        />
      </div>
    </div>
  )
}

export default Hero
