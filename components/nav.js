import Link from "next/link";
import React from "react";

const Nav = () => (
  <div className="uk-container uk-container-large">
    <nav className="uk-navbar-container" data-uk-navbar>
      <div className="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="/">
          <span uk-icon="icon: home; ratio: 2"></span>
        </a>
      </div>
      <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
          <li className="uk-flex uk-flex-wrap">
            {/* <Link as={`/category/${category.slug}`} href="/category/[id]">
                    <a className="uk-link-reset">{category.name}</a>
                  </Link> */}
            <Link href="/works">
              <a className="uk-link-reset" style={{ fontSize: 24 }}>
                Portfolio
              </a>
            </Link>
            <Link href="/blog">
              <a className="uk-link-reset" style={{ fontSize: 24 }}>
                Blog
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
