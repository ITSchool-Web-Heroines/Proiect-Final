import Body from "../components/Body/Body"
import { Fragment } from "react"
import Services from "../components/Body/Services"
import About from "../components/Body/About"
import Projects from "../components/Body/Projects"
import Review from "../components/Body/Review"
import Contact from "../components/Body/Contactform"

export default function Home() {
  return (
    <Fragment>
      <Body />
      <Services />
      <About />
      <Projects />
      <Review/>
      <Contact/>
    </Fragment>

  )
}
