import Link from 'next/link'
import Head from 'next/head'

const burgerClick = () => {
  const el = document.getElementById("burger");
  const target = el?.dataset.target;
  const $target = document.getElementById(target!);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  el?.classList.toggle('is-active');
  $target?.classList.toggle('is-active');
}

type HeaderLinkProps = {
  text: string;
  href: string;
}

function HeaderLink(props: HeaderLinkProps) {
  return (
    <Link href={props.href}>
      <a onClick={burgerClick} className="navbar-item has-text-white has-background-black">
        {props.text}
      </a>
    </Link>
  );
}

export type HeaderProps = {
  title?: string;
  description?: string;
}

export function Header(props: HeaderProps) {
  var title = "nicklausw";
  var description = "nicklausw, programmer in Marietta, GA.";
  if(props.title !== undefined) {
    title = props.title;
  }
  if(props.description !== undefined) {
    description = props.description;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} key="title"/>
        <meta name="description" content={description} key="description"/>
        <meta name="og:title" content={title} key="og:title"/>
        <meta name="og:description" content={description} key="og:description"/>
        <meta property="og:image" content="https://www.nicklausw.com/embed.webp"/>
        <meta name="twitter:card" content="summary_large_image"/>
      </Head>
      <nav className="navbar is-spaced is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <h1 style={{fontSize: "30px"}}>nicklausw</h1>
            </a>
          </Link>
          <a role="button" id="burger" className="navbar-burger" onClick={burgerClick} aria-label="menu" aria-expanded="false" data-target="navbarBasic">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-start"></div>
        <div className="navbar-end">
          <div id="navbarBasic" className="navbar-menu has-background-black">
            <HeaderLink href="/" text="Home"/>
            <HeaderLink href="/blog/0" text="About"/>
            <HeaderLink href="/blog" text="Blog"/>
            <HeaderLink href="/contact" text="Contact"/>
            <HeaderLink href="/resume.pdf" text="Résumé"/>
          </div>
        </div>
      </nav>
    </>
  );
}

