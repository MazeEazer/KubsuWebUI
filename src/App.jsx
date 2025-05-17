import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Advantages from "./components/Advantages"
import Support from "./components/Support"
import Drupal from "./components/Drupal"
import Tariffs from "./components/Tariffs"
import Tasks from "./components/Tasks"
import Team from "./components/Team"
import Cases from "./components/Cases"
import Reviews from "./components/Reviews"
import Workwithus from "./components/Workwithus"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import PopUpForm from "./components/PopUpForm/PopUpForm"
import "./styles/main.css"
import "./styles/media.css"
import "./styles/normalize.css"

function App() {
  return (
    <BrowserRouter basename="/project">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
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
            </main>
          }
        />
        <Route path="/contact-form" element={<PopUpForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
