import Image from "next/image";
import Link from "next/link";

export default function ProductCard ({
  image,
  title,
  desc,
  link,
}: {
  image: string;
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className="card">
      <div className="card__img">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="card__img"
        />
      </div>
      <div className="card-body">
        <div className="card__body">
          <h3 className="card__title">{title}</h3>
          <p className="card__desc">{desc}</p>
        </div>
        <div className="card__actions">
          <Link href={link} className="btn btn--primary">
            معرفة المزيد
          </Link>
        </div>
      </div>
    </div>
  );
}
