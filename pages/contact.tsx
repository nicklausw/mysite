import Page from "../components/Page"
import { Email } from "react-obfuscate-email";

export default function Contact() {
  return (
    <Page title="nicklausw - contact">
      <div className="flex opaque-background p-6 mx-auto justify-center text-center w-11/12 lg:w-3/4 rounded-xl">
        <p className="text-3xl text-white">
        <p>e-mail: <Email email="n@nicklausw.com"/></p>
        <br/>
        <p>phone: <a href="tel:7708289753">7708289753</a></p>
        </p>
      </div>
    </Page>
  )
}
