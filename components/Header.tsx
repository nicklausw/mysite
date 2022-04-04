import Link from 'next/link'

const burgerClick = () => {
  const el = document.getElementById("burger");
  const target = el?.dataset.target;
  const $target = document.getElementById(target!);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  el?.classList.toggle('is-active');
  $target?.classList.toggle('is-active');
}

export default function Header() {
  return (
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
          <Link href="/">
            <a onClick={burgerClick} className="navbar-item has-text-white has-background-black">
              Home
            </a>
          </Link>

          <Link href="/blog/post/1">
            <a onClick={burgerClick} className="navbar-item has-text-white has-background-black">
              About
            </a>
          </Link>

          <Link href="/blog">
            <a onClick={burgerClick} className="navbar-item has-text-white has-background-black">
              Blog
            </a>
          </Link>

          <Link href="/contact">
            <a onClick={burgerClick} className="navbar-item has-text-white has-background-black">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

