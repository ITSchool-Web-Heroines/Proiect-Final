import Body from "../components/Body/Body"
import { Fragment } from "react"
import Services from "../components/Body/Services"
import About from "../components/Body/About"
export default function Home() {
  return (
    <Fragment>
      <Body/>
      <Services/>
      <About/>
    </Fragment>
  )
}
