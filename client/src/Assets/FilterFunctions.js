// Filter products
export const filterProducts = async (event, variables) => {
  const { name, value, checked } = event.target;
  const [sortby, setSortby, discount, setDiscount, priceRange, setPriceRange] =
    variables;
  // console.log(name, value, checked);
  switch (name) {
    case "sortby": {
      setSortby(value);
      break;
    }
    case "discount": {
      checked
        ? setDiscount([...discount, +value])
        : setDiscount(discount.filter((elem) => elem !== +value));
      break;
    }
    case "pricerange": {
      const [a, b] = value.split("-");
      checked
        ? setPriceRange([...priceRange, [+a, +b]])
        : setPriceRange(
            priceRange.filter((elem) => elem[0] !== +a && elem[1] !== +b)
          );
      break;
    }
    default:
      break;
  }
};

// Filtering products bases on sorting type
export const filterBySort = (
  products,
  sortby,
  offerProducts,
  categoryProducts,
  category
) => {
  if (sortby === "lth") {
    return products.sort((a, b) => a.current_price - b.current_price);
  } else if (sortby === "htl") {
    return products.sort((a, b) => b.current_price - a.current_price);
  } else
    return category === "topoffers"
      ? [...offerProducts]
      : [...categoryProducts];
};

// Filtering products bases on dicount
export const filterByDiscount = (products, discount) => {
  const minDiscount = Math.min(...discount);

  return products.filter(
    (elem) =>
      minDiscount <=
      Math.floor(100 - (elem.current_price * 100) / elem.original_price)
  );
};

// Filtering products bases on price ranges
export const filterByPriceRange = (products, priceRange) => {
  let newProducts = [];
  for (let i = 0; i < priceRange.length; i++) {
    let minPrice = priceRange[i][0];
    let maxPrice = priceRange[i][1];
    let filterProducts = products.filter(
      (elem) => elem.current_price >= minPrice && elem.current_price <= maxPrice
    );
    newProducts.push(...filterProducts);
  }
  return newProducts;
};
