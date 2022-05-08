import { Header, HeaderProps } from "./Header"

type PageProps = HeaderProps & {
  children: JSX.Element | JSX.Element[];
}

export default function Page(props: PageProps) {
  return (
    <>
      <Header title={props.title} description={props.description}/> 
      <div className="section pt-2 pb-6">
        <div className="container has-text-white">
          {props.children}
        </div>
      </div>
    </>
  );
}