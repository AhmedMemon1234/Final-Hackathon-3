export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
      {
        name: "name",
        type: "string",
        title: "Name",
      },
      {
        name: "price",
        type: "number",
        title: "Price",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
      },
      {
        name: "image",
        type: "image",
        title: "Image",
      },
      {
        name: "discountPercentage",
        type: "number",
        title: "Discount Percentage",
      },
    ],
  };