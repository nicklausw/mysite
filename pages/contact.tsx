import Page from "../components/Page"
import { Email } from "react-obfuscate-email";

export default function Home() {
  return (
    <Page title="nicklausw - contact">
      <div className="pt-6">
        <p className="is-size-3 has-text-centered pl-0">e-mail: <Email email="n@nicklausw.com"/></p>
        <br/>
        <p className="is-size-3 has-text-centered pl-0">phone: <a href="tel:7708289753">7708289753</a></p>
      </div>
    </Page>
  )
}
