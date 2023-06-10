import Button from "@/components/button"

export default function Navigation() {
  return (
    <nav className="flex gap-4 content-center">
      <Button variant="plain" href="https://blog.bookstyleq.com">Our blog</Button>
      <Button variant="secondary" href="#form-section">Request early access</Button>
    </nav>
  )
}
