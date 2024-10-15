import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import TitlePhoto from "@/components/title_photo";
import ProductCard from "@/components/product_card";

export default function Home() {
  return (
    <div>
      <TitlePhoto />
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <ProductCard />
    </div>
  );
}
