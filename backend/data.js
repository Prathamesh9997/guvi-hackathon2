import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Prathamesh Gunde",
      email: "gundep09@gmail.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: true,
    },
    {
      name: "Ruturaj Gunde",
      email: "prathamesh9997@gmail.com",
      password: bcrypt.hashSync("12345", 8),
      isAdmin: false,
    },
  ],
  movies: [
    {
      name: "Lockout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "English",
      duration: "2.43",
      releaseDate: new Date("08/07/2020"),
      category: "Action",
      image: "/images/p1.jpg",
      likes: "89",
    },
    {
      name: "ANT-MAN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "English",
      duration: "2.53",
      releaseDate: new Date("09/20/2020"),
      category: "Action",
      image: "/images/p2.jpg",
      likes: "95",
    },
    {
      name: "Raabata",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "Hindi",
      duration: "2.30",
      releaseDate: new Date("01/07/2021"),
      category: "Love",
      image: "/images/p3.jpg",
      likes: "75",
    },
    {
      name: "Kahaani 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "Hindi",
      duration: "2.20",
      releaseDate: new Date("03/28/2021"),
      category: "Suspense",
      image: "/images/p4.jpg",
      likes: "83",
    },
    {
      name: "Mitawa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "Marathi",
      duration: "2.43",
      releaseDate: new Date("05/12/2021"),
      category: "Rommance",
      image: "/images/p5.jpg",
      likes: "65",
    },
    {
      name: "Timepass",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "Marathi",
      duration: "2.43",
      releaseDate: new Date("07/22/2021"),
      category: "Rommance",
      image: "/images/p6.jpg",
      likes: "72",
    },
    {
      name: "Bahubali 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "Tamil",
      duration: "2.43",
      releaseDate: new Date("07/22/2021"),
      category: "Drama",
      image: "/images/p7.jpg",
      likes: "95",
    },
    {
      name: "Joker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "English",
      duration: "2.53",
      releaseDate: new Date("07/22/2021"),
      category: "Thriller",
      image: "/images/p8.jpg",
      likes: "62",
    },
    {
      name: "Drishyam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ducimus delectus quos illum voluptate molestias mollitia odio reprehenderit hic eveniet sunt! Voluptatum, itaque at quo in tenetur omnis aspernatur eum necessitatibus mollitia sed alias dolores. Voluptatibus rerum, voluptate minima quis unde, quidem itaque ipsam excepturi ipsa, a quas suscipit nobis!",
      language: "Hindi",
      duration: "2.59",
      releaseDate: new Date("07/22/2021"),
      category: "Thriller",
      image: "/images/p9.jpg",
      likes: "82",
    },
  ],
  cinemaHalls: [
    {
      name: "INOX",
      city: "Kolhapur",
      shows: [
        {
          time: "9.00",
          movieId: "60c5b996d07aea1fd4aee7fb",
        },
        {
          time: "12.00",
          movieId: "60c5b996d07aea1fd4aee7fc",
        },
        {
          time: "15.00",
          movieId: "60c5b996d07aea1fd4aee7fb",
        },
        {
          time: "18.00",
          movieId: "60c5b996d07aea1fd4aee7fc",
        },
        {
          time: "21.00",
          movieId: "60c5b996d07aea1fd4aee7fd",
        },
      ],
    },

    {
      name: "DYP",
      city: "Kolhapur",
      shows: [
        {
          time: "9.00",
          movieId: "60c5b996d07aea1fd4aee7fb",
        },
        {
          time: "12.00",
          movieId: "60c5b996d07aea1fd4aee7fc",
        },
        {
          time: "15.00",
          movieId: "60c5b996d07aea1fd4aee7fa",
        },
        {
          time: "18.00",
          movieId: "60c5b996d07aea1fd4aee7f8",
        },
        {
          time: "21.00",
          movieId: "60c5b996d07aea1fd4aee7fe",
        },
      ],
    },

    {
      name: "City Pride",
      city: "Pune",
      shows: [
        {
          time: "9.00",
          movieId: "60c5b996d07aea1fd4aee7f7",
        },
        {
          time: "12.00",
          movieId: "60c5b996d07aea1fd4aee7f8",
        },
        {
          time: "15.00",
          movieId: "60c5b996d07aea1fd4aee7f9",
        },
        {
          time: "18.00",
          movieId: "60c5b996d07aea1fd4aee7f7",
        },
        {
          time: "21.00",
          movieId: "60c5b996d07aea1fd4aee7fa",
        },
      ],
    },

    {
      name: "Ocean",
      city: "Pune",
      shows: [
        {
          time: "9.00",
          movieId: "60c5b996d07aea1fd4aee7ff",
        },
        {
          time: "12.00",
          movieId: "60c5b996d07aea1fd4aee7fe",
        },
        {
          time: "15.00",
          movieId: "60c5b996d07aea1fd4aee7fd",
        },
        {
          time: "18.00",
          movieId: "60c5b996d07aea1fd4aee7ff",
        },
        {
          time: "21.00",
          movieId: "60c5b996d07aea1fd4aee7fd",
        },
      ],
    },

    {
      name: "City Pride",
      city: "Mumbai",
      shows: [
        {
          time: "9.00",
          movieId: "60c5b996d07aea1fd4aee7f7",
        },
        {
          time: "12.00",
          movieId: "60c5b996d07aea1fd4aee7f8",
        },
        {
          time: "15.00",
          movieId: "60c5b996d07aea1fd4aee7f9",
        },
        {
          time: "18.00",
          movieId: "60c5b996d07aea1fd4aee7fa",
        },
        {
          time: "21.00",
          movieId: "60c5b996d07aea1fd4aee7f7",
        },
      ],
    },

    {
      name: "INOX",
      city: "Mumbai",
      shows: [
        {
          time: "9.00",
          movieId: "60c5b996d07aea1fd4aee7fb",
        },
        {
          time: "12.00",
          movieId: "60c5b996d07aea1fd4aee7fc",
        },
        {
          time: "15.00",
          movieId: "60c5b996d07aea1fd4aee7fd",
        },
        {
          time: "18.00",
          movieId: "60c5b996d07aea1fd4aee7fe",
        },
        {
          time: "21.00",
          movieId: "60c5b996d07aea1fd4aee7ff",
        },
      ],
    },
  ],
};
export default data;
