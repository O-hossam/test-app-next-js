import Link from "next/link";
import "../style/Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <h4>الجديد</h4>
            <ul>
              <li>
                <a href="#">Copilot للمؤسسات</a>
              </li>
              <li>
                <Link href="#">Copilot للاستخدام الشخصي</Link>
              </li>
              <li>
                <Link href="#">Microsoft 365</Link>
              </li>
              <li>
                <Link href="#">استكشف منتجات Microsoft</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Microsoft Store</h4>
            <ul>
              <li>
                <Link href="#">ملف تعريف الحساب</Link>
              </li>
              <li>
                <Link href="#">المرتجعات</Link>
              </li>
              <li>
                <Link href="#">تعقب الطلب</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>التعليم</h4>
            <ul>
              <li>
                <Link href="#">Microsoft Education</Link>
              </li>
              <li>
                <Link href="#">أجهزة التعليم</Link>
              </li>
              <li>
                <Link href="#">Microsoft Teams للتعليم</Link>
              </li>
              <li>
                <Link href="#">Microsoft 365 Education</Link>
              </li>
              <li>
                <Link href="#">Office Education</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>الأعمال</h4>
            <ul>
              <li>
                <Link href="#">Microsoft Cloud</Link>
              </li>
              <li>
                <Link href="#">الأمان من Microsoft</Link>
              </li>
              <li>
                <Link href="#">Microsoft Advertising</Link>
              </li>
              <li>
                <Link href="#">Microsoft 365 Copilot</Link>
              </li>
              <li>
                <Link href="#">Microsoft Teams</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>المطور وتكنولوجيا المعلومات</h4>
            <ul>
              <li>
                <Link href="#">مطوّر Microsoft</Link>
              </li>
              <li>
                <Link href="#">التوثيق</Link>
              </li>
              <li>
                <Link href="#">مجتمع Microsoft Tech</Link>
              </li>
              <li>
                <Link href="#">Microsoft Power Platform</Link>
              </li>
              <li>
                <Link href="#">Visual Studio</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>شركة</h4>
            <ul>
              <li>
                <Link href="#">الوظائف</Link>
              </li>
              <li>
                <Link href="#">الخصوصية في Microsoft</Link>
              </li>
              <li>
                <Link href="#">الاستدامة</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-left">
            <Link href="#">العربية </Link>
          </div>
          <div className="footer-right">
            <Link href="#">اتصل بـ Microsoft</Link>
            <Link href="#">العلامات التجارية</Link>
            <Link href="#">حول إعلاناتنا</Link>
            <span>© Microsoft 2025</span>
          </div>
        </div>
      </footer>
    </>
  );
}
