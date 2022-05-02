import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        <h3>Accordion</h3>
      </Link>
      <Link href="/list" className="item">
        <h3>Search</h3>
      </Link>
      <Link href="/dropdown" className="item">
        <h3>Dropdown</h3>
      </Link>
      <Link href="/translate" className="item">
        <h3>Translate</h3>
      </Link>
    </div>
  );
};

export default Header;
