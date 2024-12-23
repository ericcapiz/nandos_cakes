import cake7 from './img/Cakes/cake7.jpg';
import cake3 from './img/Cakes/cake3.jpg';
import cake4 from './img/Cakes/cake4.jpg';
import cake5 from './img/Cakes/cake5.jpg';
import cake11 from './img/Cakes/cake11.jpg';
import cake17 from './img/Cakes/cake17.jpg';

export const CakeState = () => {
    return [
      {
        title: "Cake 1",
        mainImg: cake7,
        secondaryImg: cake5,
        url: "/work/cake1",
        reviews: [
          {
            title: "Truly A masterpiece",
            description:
              "“The most fascinating looking cake I have seen.”",
          },
          {
            title: "Freshly Baked.",
            description:
              "“Nando's Cakes are always moist and taste sooooo goooood!”",
          },
          {
            title: "So Delicious.",
            description:
              "“I wish I could eat this again!”",
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
              "“I was so shocked how this came out. I shouldn't have been because Nando's always have the best looking cakes!”",
          },
          {
            title: "Timely",
            description:
              "“I swear as soon as I placed the order, it was ready to go :-)”",
          },
          {
            title: "Need More Cake",
            description:
              "“Such an awesome job with this cake, I will be reaching out and placing more orders!”",
          },
        ],
      },
      {
        title: "Cake 3",
        mainImg: cake4,
        url: "/work/cake3",
        secondaryImg: cake17,
        reviews: [
          {
            title: "Great Work",
            description:
              "“I gave him a theme and let him just be creative with it and I was very pleased!”",
          },
          {
            title: "Yummy",
            description:
              "“The cake was eaten up so quick! Another order coming in now!”",
          },
          {
            title: "The Best",
            description:
              "“This was just the best themed cake I've seen. Such a shame it had to be eaten. LOL”",
          },
        ],
      },
    ];
  };