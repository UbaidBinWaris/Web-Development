import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import TitlePhoto from "@/components/title_photo";
import ProductCard from "@/components/product_card";

export default function Home() {
  return (
    <div>
      <TitlePhoto />
      <h1>Collection</h1>
      <ProductCard />
    </div>
  );
}
