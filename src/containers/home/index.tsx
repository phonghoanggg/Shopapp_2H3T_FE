import Button from "@/compound/button/Button";
import Image from "next/image";
import BannerSrc from "../../assets/images/banner/banner1.avif";
import BannerSection from "./BannerSection";
export default function Home() {
  return (
    <main className="home-page">
      <BannerSection
        classname="bg-light-orang"
        title="30-70% OFF + FREE SHIPPING"
        subtitle="THE FRIENDS & FAMILY EVENT"
        description="Friendship, family and fantastic deals—your circle deserves it all. Online & in select stores. Prices as marked."
      />
      <section className="section-content">
        <Image
          className="image"
          width={1500}
          height={500}
          src={BannerSrc}
          alt="Banner"
          loading="lazy"
        />

        <p className="title _text-center">
          You know it. You love it. You got to have it.
        </p>
        <div className="links container">
          <Button
            color="primary"
            className="_text-capitalize _text-center"
            type="button"
          >
            Shop Men
          </Button>
          <Button
            color="primary"
            className="_text-capitalize _text-center"
            type="button"
          >
            Shop women
          </Button>
        </div>
      </section>
      <BannerSection
        title="EXTRA 50% OFF SALE"
        subtitle="SALE ON SALE"
        description="These savings burn fast and burn bright. Get them now before they’re gone."
        footer="Auto-applied at checkout. Online only."
      />
    </main>
  );
}
