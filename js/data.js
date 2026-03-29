export const destinacionesDestacados = [
    {
        id: "australia",
        nombre: "Australia",
        imagenUrl: "/img/img-index/img-main-01.png",
        propiedadesCount: 2246,
    },
    {
        id: "japan",
        nombre: "Japan",
        imagenUrl: "/img/img-index/img-main-02.png",
        propiedadesCount: 1278,
    },
    {
        id: "new-zealand",
        nombre: "New Zealand",
        imagenUrl: "/img/img-index/img-main-03.png",
        propiedadesCount: 480,
    },
    {
        id: "greece",
        nombre: "Greece",
        imagenUrl: "/img/img-index/img-main-04.png",
        propiedadesCount: 320,
    }
]

export const ofertas = [
  {
    id: "sydneys-10-most-fashionable-5-star-hotels",
    titulo: "Sydney's 10 Most Fashionable 5 Star Hotels",
    descripcion:
      "Browse the fastest growing tourism sector in the heart of Australia tourism Capital.",
    imagenUrl: "/img/img-index/img-main-05.png",
  },
  {
    id: "vegan-travel",
    titulo: "Top cities for Vegan Travellers",
    descripcion:
      "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    imagenUrl: "/img/img-index/img-main-06.png",
  },
  {
    id: "post-covid",
    titulo: "World's top destinations during and post covid timeline",
    descripcion:
      "Pandemic is still here and will be here for a longer time. Here's where your next destination...",
    imagenUrl: "/img/img-index/img-main-07.png",
  },
];

export const hotelesPopulares = [
  {
    id: "lakeside-motel-warefront",
    nombre: "Lakeside Motel Warefront",
    imagenUrl: "/img/img-index/img-main-08.png",
    propiedadesCount: 2246,
  },
  {
    id: "rocce-graham-resort",
    nombre: "Rocce Graham resort",
    imagenUrl: "/img/img-index/img-main-09.png",
    propiedadesCount: 1278,
  },
  {
    id: "fireside-dinners",
    nombre: "Fireside Dinners",
    imagenUrl: "/img/img-index/img-main-10.png",
    propiedadesCount: 480,
  },
  {
    id: "oculous-inn-stay",
    nombre: "Oculous Inn Stay",
    imagenUrl: "/img/img-index/img-main-11.png",
    propiedadesCount: 320,
  },
];

export const searchResultsData = {
  query: {
    where: "Melbourne",
    checkin: "Mar 18, 2022",
    checkout: "March 20, 2022",
    guests: "2 adult, 1 room",
  },
  totalResults: 2582,
  filters: {
    budgetRanges: [
      { min: 0, max: 200, count: 200 },
      { min: 250, max: 500, count: 19 },
      { min: 500, max: 1000, count: 12 },
      { min: 1000, max: 2000, count: 12 },
      { min: 2000, max: 8000, count: 230 },
    ],
    popularFilters: [
      { id: "free-cancellation", label: "Free cancellation", count: 200 },
      { id: "beachfront", label: "Beach front", count: 100 },
      { id: "hot-tub", label: "Hot tub/Jacuzzi", count: 15 },
      { id: "no-credit-card", label: "Book without credit card", count: 12 },
      { id: "pet-friendly", label: "Pet friendly", count: 200 },
    ],
    activities: [
      { id: "fishing", label: "Fishing", count: 200 },
      { id: "hiking", label: "Hiking", count: 100 },
      { id: "beach", label: "Beach", count: 15 },
      { id: "cycling", label: "Cycling", count: 12 },
      { id: "sauna", label: "Sauna", count: 12 },
      { id: "night-lights", label: "Night lights", count: 12 },
    ],
  },
  results: [
    {
      hotelId: "lakeside-motel-warefront",
      name: "Lakeside Motel Warefront",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Book now and receive 15% off",
      pricePerNight: "$130",
    },
    {
      hotelId: "julia-dens-resort",
      name: "Julia Dens Resort",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$240",
    },
    {
      hotelId: "achmin-septer-hotel",
      name: "Achmin Septer Hotel",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      pricePerNight: "$300",
    },
    {
      hotelId: "regindford-hotel",
      name: "Regindford Hotel",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$120",
    },
    {
      hotelId: "shangri-open-house",
      name: "Shangri Open House",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$145",
    },
    {
      hotelId: "ocean-waves-resort",
      name: "Ocean Waves Resort",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$310",
    },
    {
      hotelId: "main-city-frontier",
      name: "Main City frontier",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      pricePerNight: "$190",
      oldPrice: "$200",
    },
    {
      hotelId: "lakeside-motel-warefront",
      name: "Lakeside Motel Warefront",
      rating: 4.5,
      reviewsCount: 1200,
      description:
        "Live a little and relax with champagne\nReimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$300",
      oldPrice: "$200",
    },
  ],
};