import Card from "@/components/molecules/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RelatedArticle from "../RelatedArticle";

const BlogContent = ({ gambar, title, date, time, desc }) => {
  return (
    <>
      <Image src={gambar} alt="" width={1280} height={1280} />
      <div class="flex flex-col justify-center w-[500px]">
        <h1 class="w-[500px] text-4xl font-bold pt-10">{title}</h1>
        <p class="text-left font-thin py-10">
          {date}, {time} +08
        </p>
        <hr />
        <div class="pt-10 text-lg pb-[100px] font-thin text">{desc}</div>
        <hr />
      </div>
    </>
  );
};

export default BlogContent;
