export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-8">
      <div className="wrapper flex flex-col md:flex-row gap-8 lg:gap-12">
        <aside className="flex flex-col gap-4 md:w-32 md:text-right md:pt-44 px-4">
          <a href="/legal/terms" className="font-medium text-gray-500 hover:text-gray-700">Terms</a>
          <a href="/legal/privacy" className="font-medium text-gray-500 hover:text-gray-700">Privacy</a>
        </aside>
        <div className="flex-1 px-4">
          {children}
        </div>
      </div>
    </div>
  )
}
