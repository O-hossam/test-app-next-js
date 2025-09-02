// import Link from "next/link";
// import Image from "next/image";

import "../style/variables.css";
import "../style/button.css";
import "../style/card.css";
import ProductCard from "./ProductCard";




export default function Products() {
  const products = [
    {
      image: "/image/box-1.png",
      title: "Microsoft Edge",
      desc: "الجيل التالي من الألعاب. أهدافك. الأصدقاء والعائلة. Windows 11",
      link: "#",
    },
    {
      image: "/image/box-2.png",
      title: "Microsoft Edge",
      desc: "أداء على مستوى عالمي مع خصوصية وإنتاجية وقيمة أكبر الاستعراض.",
      link: "#",
    },
    {
      image: "/image/box-3.png",
      title: "Microsoft OneDrive",
      desc: "احفظ ملفاتك وصورك على OneDrive وتمتع بالوصول إليها من أي جهاز.",
      link: "#",
    },
    {
      image: "/image/box-4.png",
      title: "Outlook لنظامي iOS وAndroid",
      desc: "اتصل. نظّم. أنجز المهام. تم إنشاؤه لأجل عصر العمل المختلط",
      link: "#",
    },
  ];

  return (
    <section className="section">
      <div className="grid">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            desc={product.desc}
            link={product.link}
          />
        ))}
      </div>
    </section>
  );
}





// export default function Products() {
//   return (
//     <>
//       <section className="section">
//         <div className="grid">
//           <div className="card">
//             <div className="card__img">
//               <Image
//                 src="/images/box-1.png"
//                 alt="box"
//                 fill={true}
//               />
//             </div>
//             <div className="card-body">
//               <div className="card__body">
//                 <h3 className="card__title">Microsoft Edge </h3>
//                 <p className="card__desc">
//                   الجيل التالي من الألعاب. أهدافك. الأصدقاء والعائلة. Windows 11
//                 </p>
//               </div>
//               <div className="card__actions">
//                 <Link href="#" className="btn btn--primary">
//                   معرفةالمزيد
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <Image
//               src="/images/box-2.png"
//               alt="box"
//               className="card__img"
//               width={100}
//               height={100}
//             />
//             <div className="card-body">
//               <div className="card__body">
//                 <h3 className="card__title">Microsoft Edge </h3>
//                 <p className="card__desc">
//                   أداء على مستوى عالمي مع خصوصية وإنتاجية وقيمة أكبر الاستعراض.
//                 </p>
//               </div>
//               <div className="card__actions">
//                 <Link href="#" className="btn btn--primary">
//                   معرفة المزيد
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <Image
//               src="/images/box-3.png"
//               alt="box"
//               className="card__img"
//               width={100}
//               height={100}
//             />
//             <div className="card-body">
//               <div className="card__body">
//                 <h3 className="card__title">Microsoft OneDrive</h3>
//                 <p className="card__desc">
//                   احفظ ملفاتك وصورك على OneDrive وتمتع بالوصول إليها من أي جهاز،
//                   .
//                 </p>
//               </div>
//               <div className="card__actions">
//                 <Link href="#" className="btn btn--primary">
//                   معرفة المزيد
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="card">
//             <Image
//               src="/images/box-4.png"
//               alt="box"
//               className="card__img"
//               width={100}
//               height={100}
//             />
//             <div className="card-body">
//               <div className="card__body">
//                 <h3 className="card__title">Outlook لنظامي iOS وAndroid</h3>
//                 <p className="card__desc">
//                   اتصل. نظّم. أنجز المهام. تم إنشاؤه لأجل عصر العمل المختلط{" "}
//                 </p>
//               </div>
//               <div className="card__actions">
//                 <Link href="#" className="btn btn--primary">
//                   معرفة المزيد
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
