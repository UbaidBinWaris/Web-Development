import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import TitlePhoto from "@/components/title_photo";
import ProductCard from "@/components/product_card";
import InfoCard from "@/components/info_Card";

export default function Home() {
  return (
    <div>
      <TitlePhoto />
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <ProductCard />
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <InfoCard/>
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <InfoCard/>
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <InfoCard/>
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <InfoCard/>
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <InfoCard/>
      

    </div>
  );
}
