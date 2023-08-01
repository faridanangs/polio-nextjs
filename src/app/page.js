"use client";

import { ParticlesNext } from "@/components/Particles";
import Transition from "@/components/Transition";
import Image from "next/image";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function Home() {
  const sendEmail = () => {
    window.location.href = "mailto: f4r1danangs@gmail.com";
  };
  const donloadResume = () => {
    const cvUrl = "/Farid_Anang_Samudra.pdf"; // Ubah URL dengan URL file CV Anda
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "/Farid_Anang_Samudra.pdf"; // Nama file yang akan muncul saat diunduh
    link.click();
  };
  return (
    <>
    <Transition/>
      <main className="pb-24 h-full md:h-screen md:pb-4 dark:backdrop-blur-2xl dark:bg-black dark:text-white">
        <div className="md:flex md:justify-center h-full md:px-10 w-full md:items-center lg:px-12">
      {/* <ParticlesNext /> */}
          {/* Image Containt */}
          <div className="relative h-[50vh] w-full md:hidden lg:inline-block">
            <Image
              src="/profile.webp"
              fill
              alt="Image Profile"
              className="object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="px-4 flex flex-col gap-2 mx-auto w-full">
            <h1 className="font-bold text-3xl text-center md:text-6xl lg:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
            <p className="text-center md:text-xl md:mt-4 lg:text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio officia tempora vero rem rerum id! Assumenda alias ad
              iste, maxime id illo vitae atque saepe ea quisquam molestiae
              similique enim.
            </p>

            {/* Resume and Contact */}
            <div className="flex mt-4 gap-4 items-center justify-center font-bold lg:justify-start">
              <button
                onClick={donloadResume}
                className="border flex px-4 items-center gap-2 py-2 text-black hover:shadow-md duration-300 hover:shadow-black rounded-md bg-slate-300 md:text-2xl"
              >
                Resume <GoLinkExternal />
              </button>
              <button onClick={sendEmail} className="md:text-2xl">
                Contact
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
