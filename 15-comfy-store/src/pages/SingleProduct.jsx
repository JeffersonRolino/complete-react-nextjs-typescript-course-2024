import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch.get(`/products/${params.id}`);
  return { product: response.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;

  const dollarsAmount = formatPrice(price);

  return (
    <div>
      <h1 className="text-4xl">Single Product</h1>
    </div>
  );
}

export default SingleProduct;
