import imgPizza1 from "../assets/asset-3.jpeg";
import imgPizza2 from "../assets/asset-4.jpeg";
import imgPizza3 from "../assets/asset-5.jpeg";
import imgBurger1 from "../assets/asset-7.jpeg";
import imgBurger2 from "../assets/asset-8.jpeg";
import imgBurger3 from "../assets/asset-9.jpeg";

const data = [
  [
    {
      category: "Pizza",
      products: [
        {
          src: imgPizza1,
          price: "$15.99",
          title: "Pizza Mozzarella",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
        },
        {
          src: imgPizza2,
          price: "$19.99",
          title: "Pizza Margherita",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
        },
        {
          src: imgPizza3,
          price: "$22.99",
          title: "Pizza Funghi",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
        },
      ],
    },
  ],
  [
    {
      category: "Burger",
      products: [
        {
          src: imgBurger1,
          price: "$15.99",
          title: "BBQ Burger",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
        },
        {
          src: imgBurger2,
          price: "$12.99",
          title: "Cheese Burger",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
        },
        {
          src: imgBurger3,
          price: "$10.99",
          title: "Mushroom Swiss Burger",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati, voluptatibus quaerat eum corporis est. Quas maiores consequatur officia sed cum. Reiciendis similique maxime debitis!",
        },
      ],
    },
  ],
];

export default data;
