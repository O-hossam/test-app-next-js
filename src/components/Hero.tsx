import Link from "next/link";
import "../style/hero.css";


export default function Hero() {
  return (
    <>
   
    <section className="hero">
      <div className="hero__content container">
        <h1 className="hero__title">مرحبًا بك في Microsoft</h1>
        <p className="hero__subtitle">
          اكتشف Windows وSurface وXbox وخدمات السحابة والمزيد
        </p>
        <div >
          <Link className="btn btn--primary" href="#">تسوق لاقتناء microsoft 365 </Link>
        </div>
      </div>
    </section>

    </>
)
}