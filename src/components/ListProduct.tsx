// import Link from "next/link";
// import Image from "next/image";


import "../style/variables.css";
import "../style/button.css";
import "../style/card.css";
import ProductCard from "./ProductCard";


export default function Products() {
  const products = [
    {
      image: "/image/download (7).png",
      title: "Microsoft 365 Copilot",
      desc: " الجيل التالي من الألعاب. أهدافك.",
      link: "#",
    },
    {
      image: "/image/download (8).png",
      title: "خصم 20% على Windows 365 ",
      desc: " أداء على مستوى عالمي مع خصوصية وإنتاجية.",
      link: "#",
    },
    {
      image: "/image/download (9).png",
      title: "Microsoft OneDrive",
      desc: " OneDrive وتمتع بالوصول إليها من أي جهاز، في أي مكان.",
      link: "#",
    },
    {
      image: "/image/download (10).png",
      title: "Outlook لنظامي iOS وAndroid",
      desc: "اتصل. نظّم. أنجز المهام.",
      link: "#",
    },
  ];

  return (
    <section className="section">
      <div className="grid">
        {products.map((ListProduct, index) => (
          <ProductCard
            key={index}
            image={ListProduct.image}
            title={ListProduct.title}
            desc={ListProduct.desc}
            link={ListProduct.link}
          />
        ))}
      </div>
    </section>
  );
}



// export default function ListProduct() {
//   return (
//     <>
//       <section className="section">
//         <h2 className="section__title">للاعمال </h2>
//         <div className="grid">
//           <div className="card">
//             <img
//               src="/image/download (7).png"
//               alt="box"
//               className="card__img"
//             />
//             <div className="card__body">
//               <h3 className="card__title">Microsoft 365 Copilot</h3>
//               <p className="card__desc">الجيل التالي من الألعاب. أهدافك.</p>
//             </div>
//             <div className="card__actions">
//               <a href="#" className="btn btn--primary">
//                 معرفةالمزيد
//               </a>
//             </div>
//           </div>
//           <div className="card">
//             <img
//               src="/image/download (8).png"
//               alt="box"
//               className="card__img"
//             />
//             <div className="card__body">
//               <h3 className="card__title">خصم 20% على Windows 365 </h3>
//               <p className="card__desc">
//                 أداء على مستوى عالمي مع خصوصية وإنتاجية.
//               </p>
//             </div>
//             <div className="card__actions">
//               <a href="#" className="btn btn--primary">
//                 تعرف علي المزيد
//               </a>
//             </div>
//           </div>
//           <div className="card">
//             <img
//               src="/image/download (9).png"
//               alt="box"
//               className="card__img"
//             />
//             <div className="card__body">
//               <h3 className="card__title">Microsoft OneDrive</h3>
//               <p className="card__desc">
//                 {" "}
//                 OneDrive وتمتع بالوصول إليها من أي جهاز، في أي مكان.
//               </p>
//             </div>
//             <div className="card__actions">
//               <a href="#" className="btn btn--primary">
//                 تنزيل Microsoft Onedrive
//               </a>
//             </div>
//           </div>
//           <div className="card">
//             <img
//               src="/image/download (10).png"
//               alt="box"
//               className="card__img"
//             />
//             <div className="card__body">
//               <h3 className="card__title">Outlook لنظامي iOS وAndroid</h3>
//               <p className="card__desc">اتصل. نظّم. أنجز المهام.</p>
//             </div>
//             <div className="card__actions">
//               <a href="#" className="btn btn--primary">
//                 معرفة المزيد
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
