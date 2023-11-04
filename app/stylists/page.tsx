"use client"
import { useEffect, useState } from "react"
import Image from 'next/image'
import { Heading, Text } from "@/components/typography"
import Button from "@/components/button"

type TStylist = {
  id: number
  name: string
  email: string
  phone_number: string
  slug: string
  bio: string
  logo: string
  web_address: string
  profile_url: string
  verified: boolean
  addresses: {
    id: number
    address: string
    city: string
    state: string
    zipcode: string
    country: string
    is_default: boolean
  }[]
}

function getStylistLocation(stylist: TStylist): string {
  const primaryAddress = stylist.addresses.find((a: any) => a.is_default)
  const address = primaryAddress || stylist.addresses[0]
  return `${address?.city || ''}${address?.city ? ',' : ''} ${address?.state || ''}`.trim()
}

export default function StylistsPage() {
  const [stylists, setStylists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStylists() {
      setLoading(true)
      const options = {
        headers: {
          "Authorization": "Bearer barbers-on-demand",
        },
      }
      try {
        const response = await fetch("https://app.bookstyleq.com/api/v1/accounts/stylists", options)
        const data = await response.json()
        if(data.error) {
          console.error(data.error)    
          return
        }
        setStylists(data.filter((s: TStylist) => Boolean(s.verified)))
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchStylists()
  }, [])

  return (
    <div className="py-8 min-h-[calc(100vh-86px)]">
      <div className="wrapper">
        <div className="text-center mb-12">
          <Heading level={1} className="text-3xl">StylistsPage</Heading>
          <Text>Professional stylists on the StyleQ booking platform</Text>
        </div>
        <main className="grid md:grid-cols-3 gap-8">
          {
            loading && (
              <div className="col-span-full text-center">
                <Text>Loading stylists...</Text>
              </div>
            )
          }
          {stylists.map((stylist: TStylist) => {
            const stylistLocation: string = getStylistLocation(stylist) || ""
            return (
              <div key={stylist.id} className="bg-white rounded-lg shadow-md px-4 py-8 flex flex-col gap-4 items-center">
                <Image
                  src={stylist.logo}
                  alt={stylist.name}
                  width={112}
                  height={112}
                  priority
                  className="rounded-full object-cover object-center w-28 h-28"
                />
                <Text className="font-semibold">{stylist.name}</Text>
                <Text>
                  {stylistLocation}
                </Text>
                <Button
                  href={stylist.profile_url}
                  rel="noopener noreferrer"
                  is="primary"
                >
                  View Profile
                </Button>
              </div>
            )
          })}
        </main>
      </div>
    </div>
  )
}
