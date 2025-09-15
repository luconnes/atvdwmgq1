import { ProductsList } from "@/components/ProductsList";
import Link from "next/link";

export default function FoodList() {
  return (
    <>
      <h1>Food List</h1>
      <ProductsList />
      <hr />
      <Link href="/">Home</Link>
    </>
  );
}