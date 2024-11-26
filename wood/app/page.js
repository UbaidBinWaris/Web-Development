import Image from "next/image";
import MainHeader from "@/components/MainHeader";
import TitlePhoto from "@/components/title_photo";
import ProductCard from "@/components/product_card";
import InfoCard from "@/components/info_Card";

const headings=["Tables" , "Bed" , "Sofa" , "Chair" , "Dining"];
export default function Home() {
  return (
    <div>
      <TitlePhoto />
      <h1 className="flex text-center items-center justify-center text-2xl font-bold">Collection</h1>
      <ProductCard /> 

      {headings.map((heading, index) => (
        <div key={index}>
          <h1 className="flex px-16 text-3xl font-bold">{heading}</h1>
          <InfoCard/>
        </div>
      ))}
      

    </div>
  );
}
