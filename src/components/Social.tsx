import Image from "next/image";
import Link from "next/link";
import "../style/social.css";


export default function Social() {
  return (
    <>
      <section className="social-follow">
        <div className="social-follow-x">
          <span className="text">متابعة Microsoft</span>
          <Link href="#" className="icon linkedin" aria-label="LinkedIn">
            <Image
              src="/image/facebook.svg"
              width={30}
              height={30}
              alt="icon"
              className="icon"
            />
          </Link>
          <Link href="#" className="icon X" aria-label="X">
            <Image
              src="/image/X.svg"
              width={30}
              height={30}
              alt="icon"
              className="icon"
            />
          </Link>
          <Link href="#" className="icon linkedin" aria-label="linkedin">
            <Image
              src="/image/linkedin.svg"
              width={30}
              height={30}
              alt="icon"
              className="icon"
            />
          </Link>
        </div>
        <Link href="#" className="backtotop">
          {" "}
          الرجوع الي الاعلي{" "}
        </Link>
      </section>
    </>
  );
}
