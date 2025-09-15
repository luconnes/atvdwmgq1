const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
  { title: "Orange", isFruit: true, id: 4 },
];

function Product({ product }) {
  return (
    <li
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  );
}

export function ProductsList() {
  // const filteredProducts = products.filter((product) => product.isFruit);
  const listItems = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return <ul>{listItems}</ul>;
}