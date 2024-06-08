const fakeData = {
  dataClinic: [
    {
      id: 1,
      name: "Lovely Clinic",
      description: "Pets deserve all the best treatment.",
      subTitle:
        "We are committed to providing the best care for your pets that come through our doors.",
      rating: "4.8 (+99)",
      distance: "1.5 km",
      image: require("../../../assets/lovelyClinic.jpeg"),
      address: "123 Unknown Street, Ward 5, District 10",
      comments: [
        {
          id: 1,
          name: "Victor",
          image: require("../../../assets/comment/victor.jpeg"),
          content:
            "The service is amazing. This clinic will be one of my favorite. Highly recommend!!!!",
        },
        {
          id: 2,
          name: "Elsa",
          image: require("../../../assets/comment/elsa.jpeg"),
          content:
            "The experience with my cat is great. I will return next time. The process is clear to understand.",
        },
        {
          id: 3,
          name: "Anna",
          image: require("../../../assets/comment/Anna.jpeg"),
          content:
            "Thanks to doctor, my dog had no more suffered from runny nose. Great job!",
        },
      ],
    },
    {
      id: 2,
      name: "Peties",
      description: "We commit to cure all symptoms for your pets.",
      subTitle:
        "We are committed to providing the best care for your pets that come through our doors.",
      rating: "4.8 (+99)",
      distance: "1.7 km",
      image: require("../../../assets/Peties.jpeg"),
      address: "123 Unknown Street, Ward 5, District 10",
      comments: [
        {
          id: 1,
          name: "Victor",
          image: require("../../../assets/comment/victor.jpeg"),
          content:
            "The service is amazing. This clinic will be one of my favorite. Highly recommend!!!!",
        },
        {
          id: 2,
          name: "Elsa",
          image: require("../../../assets/comment/elsa.jpeg"),
          content:
            "The experience with my cat is great. I will return next time. The process is clear to understand.",
        },
        {
          id: 3,
          name: "Anna",
          image: require("../../../assets/comment/Anna.jpeg"),
          content:
            "Thanks to doctor, my dog had no more suffered from runny nose. Great job!",
        },
      ],
    },
  ],
  dataShelter: [
    {
      id: 1,
      name: "Love Pets",
      description: "All love for pets!",
      subTitle:
        "We are committed to providing the best care for your pets that come through our doors.",
      rating: "4.8 (+99)",
      distance: "1.5 km",
      image: require("../../../assets/lovePet.jpeg"),
      address: "123 Unknown Street, Ward 5, District 10",
      petList: [
        {
          name: "Lucy",
          image: require("../../../assets/pet/Lucy.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Female",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 1000000,
        },
        {
          name: "Felix",
          image: require("../../../assets/pet/Felix.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Male",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 7500000,
        },
        {
          name: "Oscar",
          image: require("../../../assets/pet/Oscar.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Female",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 800000,
        },
        {
          name: "Luna",
          image: require("../../../assets/pet/Luna.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Male",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 1500000,
        },
      ],
      comments: [
        {
          id: 1,
          name: "Victor",
          image: require("../../../assets/comment/victor.jpeg"),
          content:
            "The service is amazing. This clinic will be one of my favorite. Highly recommend!!!!",
        },
        {
          id: 2,
          name: "Elsa",
          image: require("../../../assets/comment/elsa.jpeg"),
          content:
            "The experience with my cat is great. I will return next time. The process is clear to understand.",
        },
        {
          id: 3,
          name: "Anna",
          image: require("../../../assets/comment/Anna.jpeg"),
          content:
            "Thanks to doctor, my dog had no more suffered from runny nose. Great job!",
        },
      ],
    },
    {
      id: 2,
      name: "Cute Mate",
      description: "Wanna have a cute mate, come to us!",
      subTitle:
        "We are committed to providing the best care for your pets that come through our doors.",
      rating: "4.5 (+99)",
      distance: "1.7 km",
      image: require("../../../assets/cuteMate.jpeg"),
      address: "123 Unknown Street, Ward 5, District 10",
      petList: [
        {
          name: "Lucy",
          image: require("../../../assets/pet/Lucy.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Male",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 1000000,
        },
        {
          name: "Felix",
          image: require("../../../assets/pet/Felix.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Female",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 7500000,
        },
        {
          name: "Oscar",
          image: require("../../../assets/pet/Oscar.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Male",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 800000,
        },
        {
          name: "Luna",
          image: require("../../../assets/pet/Luna.jpeg"),
          description:
            "I am cute, fluffy and joyful.\nAy hooman, I like to put my face on your shirt. Prepare for it!\n I love pettings and cozy sleeping place.",
          sex: "Female",
          Age: 2,
          Health: "Good",
          Size: "Medium, 5kg",
          breed: "Golden Retriever",
          fee: 1500000,
        },
      ],
      comments: [
        {
          id: 1,
          name: "Victor",
          image: require("../../../assets/comment/victor.jpeg"),
          content:
            "The service is amazing. This clinic will be one of my favorite. Highly recommend!!!!",
        },
        {
          id: 2,
          name: "Elsa",
          image: require("../../../assets/comment/elsa.jpeg"),
          content:
            "The experience with my cat is great. I will return next time. The process is clear to understand.",
        },
        {
          id: 3,
          name: "Anna",
          image: require("../../../assets/comment/Anna.jpeg"),
          content:
            "Thanks to doctor, my dog had no more suffered from runny nose. Great job!",
        },
      ],
    },
  ],
};

export default fakeData;
