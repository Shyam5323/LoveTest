import Header from "@/components/Header";
import data from "../../data/data"
import QuizHero from "@/components/QuizHero";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Quiz() {
    return (
        <main className="ml-2 mr-2">
            <ToastContainer />
            <Header />
            <QuizHero data = {data}/>
        </main>
    )
}