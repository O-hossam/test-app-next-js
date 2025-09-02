import Link from "next/link";
import Image from "next/image";
import "../style/header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="header__left">
           <Link href="#"> <Image src="/image/logo.png" alt="Microsoft" width={100} height={30}  className="header__logo" /> </Link>
          <nav className="header__nav" aria-label="Primary">
            
            <Link className="header__nav-link" href="/About" >Microsoft 365  </Link>
            <Link className="header__nav-link" href="#">Teams</Link>
            <Link className="header__nav-link" href="#">Windows</Link>
            <Link className="header__nav-link" href="#">Surface</Link>
            <Link className="header__nav-link" href="#">Xbox</Link>
            <Link className="header__nav-link" href="#">الدعم</Link>
          </nav>
        </div>
        <div className="header__right">
          <Link className="header__nav-link" href="#">الكل من Microsoft</Link>
          <Link className="header__nav-link" href="#"> البحث  <img src="/image/search.svg" width={15} height={15} className="icons"/>   </Link>
          <Link className="header__nav-link" href="#"> السلة <img src="/image/cart.svg" width={15} height={15} className="icons"/> </Link>
          <Link className="header__nav-link" href="#">تسجيل الدخول  <img src="/image/user.svg" width={15} height={15} className="icons"/> </Link>
        </div>
      </div>
    </header>
  );
}

