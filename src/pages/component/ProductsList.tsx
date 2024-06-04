import React, { useEffect, useState } from "react";
import { useImage, useProduct } from "../api/products";
import ProductItem from "./ProductItem";

export default function ProductsLists() {
  const products = useProduct();
  const images = useImage();
  const [completeProd, setCompleteProd] = useState([]);
  const getImage = (id: string) => {
    const img = images?.find((img: any) => img?.id.includes(id));
    return img ? img.image : undefined;
  };

  useEffect(() => {
    let prod = [];
    for (let i = 0; i < products?.length; i++) {
      let id = products[i].id;
      const element = {
        id: products[i].id,
        name: products[i].name,
        image: getImage(id),
      };
      prod.push(element);
      setCompleteProd(prod);
    }
  }, [images]);
  return (
    <>
      <div className="p-20">
        <p className="text-center text-xl font-bold">Our Products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
          {completeProd.map((p: any) => {
            return <ProductItem product={p} />;
          })}
        </div>
      </div>
    </>
  );
}
