import Header from '../components/Header'
import { Email } from "react-obfuscate-email";

export default function Home() {
  return (
    <>
    <Header title="nicklausw - contact"/>
      <div className="section">
        <div className="container">
          <div className="content has-text-white">
            <p className="is-size-5 has-text-centered pl-0">e-mail: <Email email="n@nicklausw.com"/></p>
            <p className="is-size-5 has-text-centered pl-0">phone: <a href="tel:7708289753">7708289753</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
