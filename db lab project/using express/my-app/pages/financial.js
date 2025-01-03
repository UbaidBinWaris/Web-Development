"use client";
import React from "react";
import { useEffect, useState } from "react";
import "@/app/globals.css";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import FinanicalTable from "@/app/components/FinanicalTable";

export const financial = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container mx-auto p-6">
        <h1 className="flex justify-center text-3xl p-5 mt-5">
          Finanice Table
        </h1>
      </div>
      <FinanicalTable />
    </div>
  );
};
export default financial;
