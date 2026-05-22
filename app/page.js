import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Location from "../components/Location";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Location />
      <Footer />
      <Chatbot />
    </main>
  );
}
