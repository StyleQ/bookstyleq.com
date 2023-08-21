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
}

export default function StylistsPage() {
  const [stylists, setStylists] = useState([])

  useEffect(() => {
    async function fetchStylists() {
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
        setStylists(data.filter((s: TStylist) => Boolean(s.name) && Boolean(s.email)))
      } catch (error) {
        console.error(error)
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
          {stylists.map((stylist: TStylist) => (
            <div key={stylist.id} className="bg-white rounded-lg shadow-md px-4 py-8 flex flex-col gap-4 items-center">
              <Image
                src={stylist.logo}
                alt={stylist.name}
                width={120}
                height={120}
                priority
                className="rounded-full"
              />
              <Text>{stylist.name}</Text>
              <Button
                href={stylist.web_address}
                rel="noopener noreferrer"
                is="primary"
              >
                View Profile
              </Button>
            </div>
          ))}
        </main>
      </div>
    </div>
  )
}
