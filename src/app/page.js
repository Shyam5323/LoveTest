import { Inter , Montserrat} from "next/font/google";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import data from "../data/data"

export default function Home() {
  return (
    <div >
      <Header />
      <Hero data = {data}/>
      <Footer />
    </div>
  );
}
