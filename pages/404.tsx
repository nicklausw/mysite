import Page from "../components/Page"

export default function page404() {
  return (
    <Page title="nicklausw - 404">
      <div className="flex opaque-background p-6 mx-auto justify-center text-center w-11/12 lg:w-3/4 rounded-xl">
        <p className="text-5xl text-white">
          404 - That&apos;s a problem.
          <br/><br/>
          We&apos;re sorry about that.
        </p>
      </div>
    </Page>
  )
}