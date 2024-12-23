import "./styles/main.css"
import "./styles/media.css"
import "./styles/normalize.css"
import Header from "./components/Header"
import Advantages from "./components/Advantages"
import Support from "./components/Support"
import Drupal from "./components/Drupal"
import Tariffs from "./components/Tariffs"
import Tasks from "./components/Tasks"
import Team from "./components/Team"
import Cases from "./components/Cases"
import Reviews from "./components/Reviews"
import Workwithus from "./components/WorkWithUS/Workwithus"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Advantages />
        <Support />
        <Drupal />
        <Tariffs />
        <Tasks />
        <Team />
        <Cases />
        <Reviews />
        <Workwithus />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}

export default App
