// "use client";
import Image from "next/image";
import { Header } from "@/components/Header";
import  Hero  from "@/components/section/Hero";
import { PopularProducts } from "@/components/section/PopularProducts";


import { Heed } from "@/components/Heed";


export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <PopularProducts /> */}
      <Heed />
    </main>
  );
}
