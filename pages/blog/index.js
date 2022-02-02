import React from "react";
import Navbar from "../../components/Navbar";
import Link from "next/Link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 5).map((curElem, index) => {
        return (
          <>
            <div key={index} className="ssr-styles">
              <h3>{curElem.id}</h3>
              {/* <h2>{curElem.name}</h2>&nbsp; &nbsp; &nbsp; */}
              <Link href={`/blog/${curElem.id}`}>
                <h2>{curElem.title}</h2>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default index;
