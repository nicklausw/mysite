import Header from '../components/Header'

export default function page404 () {
  return (
    <>
    <Header title="nicklausw - 404"/>
      <div className="section pt-2 pb-4">
        <div className="container">
          <div className="content">
            <p className="has-text-white is-size-3 has-text-centered">
              404 - That page ain&apos;t real.
              <br/>
              Sorry about that.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}