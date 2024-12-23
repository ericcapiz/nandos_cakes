import cake7 from "./img/Cakes/cake7.jpg";
import cake11 from "./img/Cakes/cake11.jpg";
import cake5 from "./img/Cakes/cake5.jpg";
import cake3 from "./img/Cakes/cake3.jpg";

interface Review {
  title: string;
  description: string;
}

interface Cake {
  title: string;
  mainImg: string;
  secondaryImg: string;
  url: string;
  reviews: Review[];
}

export const CakeState = (): Cake[] => {
  return [
    {
      title: "Cake 1",
      mainImg: cake7,
      secondaryImg: cake5,
      url: "/work/cake1",
      reviews: [
        {
          title: "Truly A masterpiece",
          description: "The most fascinating looking cake I have seen.",
        },
        {
          title: "Freshly Baked.",
          description:
            "Nando's Cakes are always moist and taste sooooo goooood!",
        },
        {
          title: "So Delicious.",
          description: "I wish I could eat this again!",
        },
      ],
    },
    {
      title: "Cake 2",
      mainImg: cake11,
      url: "/work/cake2",
      secondaryImg: cake3,
      reviews: [
        {
          title: "Impressed",
          description:
            "I was so shocked how this came out. I shouldn't have been because Nando's always have the best looking cakes!",
        },
        {
          title: "Timely",
          description:
            "I swear as soon as I placed the order, it was ready to go :-)",
        },
        {
          title: "Need More Cake",
          description:
            "Such an awesome job with this cake, I will be reaching out and placing more orders!",
        },
      ],
    },
  ];
};
