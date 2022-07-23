import Link from 'next/link'
import Head from 'next/head'

const burgerClick = () => {
  const el = document.getElementById("navstuff");
  const target = el?.dataset.target;
  const $target = document.getElementById(target!);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  el?.classList.toggle('navbar-hidden');
  $target?.classList.toggle('navbar-hidden');
}

type HeaderLinkProps = {
  text: string;
  href: string;
}

function HeaderLink(props: HeaderLinkProps) {
  return (
    <Link href={props.href}>
      <a onClick={burgerClick} style={{fontSize: "17px"}} className="button text-white hover:text-gray-300">
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
  var description = "Nicklaus Willis, programmer in Marietta, GA.";
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

      {/* navbar */}
      <nav className=" flex items-center justify-between flex-wrap pb-6 lg:pb-0 pt-4 lg:pt-0">

        { /* nicklausw text */}
        <div className="flex items-center text-center flex-shrink-0 ml-2 md:ml-20 text-white text-4xl">
          <Link href="/">
            <a>
              <p className="text-white hover:text-gray-300">nicklausw</p>
            </a>
          </Link>
        </div>

        {/* mobile/tablet-only nav burger */}
        <div className="block lg:hidden mr-2 md:mr-20">
          <button onClick={burgerClick} className="flex items-center px-3 py-2 rounded text-white">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>


        {/* navigation buttons/mobile dropdown */}
        <div id="navstuff" className="absolute lg:relative header-list w-full block lg:flex flex-grow lg:justify-end lg:w-auto lg:mr-20 navbar-hidden">
          <div className="text-sm">
            <li className="flex flex-col lg:flex-row">
              <HeaderLink href="/" text="Home"/>
              <HeaderLink href="/blog/0" text="About"/>
              <HeaderLink href="/blog" text="Blog"/>
              <HeaderLink href="/contact" text="Contact"/>
              <HeaderLink href="/resume.pdf" text="Résumé"/>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}