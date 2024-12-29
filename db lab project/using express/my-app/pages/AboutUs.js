import React from "react";
import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import Image from "next/image"; // Import Image from next/image
import "@/app/globals.css";

const students = [
  {
    name: "Ubaid Bin Waris",
    rollNumber: "2212416",
    photo: "/photos/ubaid.jpg",
  },
  {
    name: "Mushaid Hussain",
    rollNumber: "2212408",
    photo: "/photos/Mushaid.jpeg",
  },
  {
    name: "Jehanzeb Khalid",
    rollNumber: "2212391",
    photo: "/photos/jezzy.jpeg",
  },
  {
    name: "Muhammad Salman",
    rollNumber: "2212400",
    photo: "/photos/salman.jpeg",
  },
];

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="my-5 p-4">
        <h2 className="text-center text-2xl font-semibold">About Us</h2>
        <p className="text-center mt-4">
          This is a university management system that allows you to manage all
          the data of the university. You can add, delete, update and view the
          data of the university.
        </p>
        <p className="text-center mt-4">
          This is a project for the Database Lab course. This project is
          designed by our team. The following team members are as:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 p-4 lg:px-40">
        {students.map((student, index) => (
          <div
            key={index}
            className=" p-4  py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2  border-white"
          >
            <div className="relative overflow-hidden flex items-center justify-center w-[200px] h-[200px] mx-auto">

              <Image
                className=" border-zinc-700 border-[4px] object-contain"
                src={student.photo}
                alt={`Photo of ${student.name}`}
                width={200}
                height={200}
              />
            </div>
            <h3 className="text-center text-2xl mt-5 ">{student.name}</h3>
            <h4 className="text-center font-bold text-gray-400">
              {student.rollNumber}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
