import Link from "next/link";
import "../style/Services.css";

export default function Serices() {
  return (
    <>
      <section className="our-section">
        <div className="content">
          <h2>اجمع بين الأشخاص من مختلف أنحاء العالم من خلال Bing Wallpaper</h2>
          <p>
            قم بتنزيل التطبيق المجاني واستمتع بمناظر رائعة مع خلفية جديدة كل
            يوم.
          </p>
          <Link href="#" className="btn btn--primary">
            احصل علي Bing Wallpaper
          </Link>
        </div>
      </section>
    </>
  );
}
