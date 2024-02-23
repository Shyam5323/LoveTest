import { Inter , Montserrat} from "next/font/google";
const montserrat = Montserrat({
    subsets: ['latin']
  })
export default function Header() {
    return (
        <div className="mb-10">
            <nav className={`flex ${montserrat.className} justify-center items-center`}>
            <p className="flex text-2xl text-pink-400 font-bold">True Love Tester</p>
            <img src="heart.jpg" className="w-[50px]"/>
        </nav>
        <p> </p>
        <hr></hr>
        </div>
    )
}