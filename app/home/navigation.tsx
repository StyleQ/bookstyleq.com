import Button from "@/components/button"

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <Button is="plain" href="https://blog.bookstyleq.com">Our blog</Button>
      <Button is="primary" href="#form-section">Request early access</Button>
    </nav>
  )
}
