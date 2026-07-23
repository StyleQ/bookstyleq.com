import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BookACall from "@/components/BookACall";

export const metadata = {
  title: "Book a Call",
  description:
    "Tell us about your senior living community and we'll set up a quick, no-pressure call about bringing StyleQ's on-site salon and spa to your residents.",
  alternates: { canonical: "/book-a-call" },
};

export default function BookACallPage() {
  return (
    <>
      <NavBar />
      <main>
        <BookACall />
      </main>
      <Footer />
    </>
  );
}
