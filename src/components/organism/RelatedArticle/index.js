import Card from "@/components/molecules/Card";
import React from "react";

const RelatedArticle = ({
  gambarBlog1,
  descBlog1,
  titleBlog1,
  gambarBlog2,
  descBlog2,
  titleBlog2,
}) => {
  return (
    <>
      <h1 class="font-bold text-lg py-10">Related Article</h1>
      <div class="flex flex-row gap-5">
        {/* <!-- CONTAINER 1 --> */}
        <Card
          cardClassname={"bg-grey-50 border shadow"}
          gambar={gambarBlog1}
          desc={descBlog1}
          title={titleBlog1}
        />
        {/* <!-- CONTAINER 2 --> */}
        <Card
          cardClassname={"bg-grey-50 border shadow"}
          gambar={gambarBlog2}
          desc={descBlog2}
          title={titleBlog2}
        />
      </div>
    </>
  );
};

export default RelatedArticle;
