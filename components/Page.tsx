import { Header, HeaderProps } from "./Header"

type PageProps = HeaderProps & {
  children: JSX.Element | JSX.Element[];
}

export default function Page(props: PageProps) {
  return (
    <>
      <Header title={props.title} description={props.description}/>
      {props.children}
      <div className="pb-20"/>
    </>
  );
}