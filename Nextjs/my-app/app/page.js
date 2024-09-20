"use client"
import Image from "next/image";
import { POST } from "./api/app/route";

export default function Home() {
  const Handle = async () => {
    let a = await fetch(/api/add/route.js , {method:POST , headers:{"Content-Type" : "application/json"} , body:JSON.stringify(data),);
    let b = await a.json();
    console.log(b); 
  };

  return (
    <div className="flex-col">
      <span className="text-xl">I am Home page</span>
      <button onClick={Handle} className="border p-2 border-red-600">
        Click me
      </button>
    </div>
  );
}
