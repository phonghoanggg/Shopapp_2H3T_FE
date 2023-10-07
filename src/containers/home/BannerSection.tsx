import Link from "next/link";

interface IPropsBanner {
  subtitle: string;
  title: string;
  description: string;
  footer?: string;
  classname?: string;
}

export default function BannerSection({
  subtitle,
  title,
  description,
  footer,
  classname,
}: IPropsBanner) {
  return (
    <section className={`home-banner-section _text-center ${classname}`}>
      <p className="subtitle _text-uppercase">{subtitle}</p>
      <h3 className="title _text-uppercase">{title}</h3>
      <p className="description">{description}</p>
      <div className="links">
        <Link href="#">Shop Men</Link>
        <Link href="#">Shop Women</Link>
        <Link href="#">Shop Kids</Link>
      </div>
      <p className="footer _text-light-success _fz-xs">{footer}</p>
    </section>
  );
}
