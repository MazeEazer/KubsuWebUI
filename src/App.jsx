import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
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
import Workwithus from "./components/Workwithus"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"
import PopUpForm from "./components/PopUpForm/PopUpForm"

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/contact-form" element={<PopUpForm />} />
      </Routes>
    </Router>
  )
}

export default App
