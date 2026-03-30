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
      subTitule: "Live a little and relax with champagne",
      description:
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Book now and receive 15% off",
      porcentaje: 15,
      descuentoAnyadido: 5,
      pricePerNight: "$130",
      oldPrice: "$150",
      imagenUrl: "/img/main-img/search-img-01.png",
    },
    {
      hotelId: "julia-dens-resort",
      name: "Julia Dens Resort",
      rating: 4.5,
      reviewsCount: 1200,
      subTitule: "Live a little and relax with champagne",
      description:
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$240",
      imagenUrl: "/img/main-img/search-img-02.png",
    },
    {
      hotelId: "achmin-septer-hotel",
      name: "Achmin Septer Hotel",
      rating: 4.5,
      reviewsCount: 1200,
      subTitule:"Live a little and relax with champagne",
      description: 
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      porcentaje: 30,
      pricePerNight: "$300",
      imagenUrl: "/img/main-img/search-img-03.png",
    },
    {
      hotelId: "regindford-hotel",
      name: "Regindford Hotel",
      rating: 4.5,
      reviewsCount: 1200,
      subTitule: "Live a little and relax with champagne",
      description:
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$120",
      imagenUrl: "/img/main-img/search-img-04.png",
    },
    {
      hotelId: "shangri-open-house",
      name: "Shangri Open House",
      rating: 4.5,
      reviewsCount: 1200,
      subTitule: "Live a little and relax with champagne",
      description:
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$145",
      imagenUrl: "/img/main-img/search-img-05.png",
    },
    {
      hotelId: "ocean-waves-resort",
      name: "Ocean Waves Resort",
      rating: 4.5,
      reviewsCount: 1200,
      subTitule: "Live a little and relax with champagne",
      description:
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$310",
      imagenUrl: "/img/main-img/search-img-06.png",
    },
    {
      hotelId: "main-city-frontier",
      name: "Main City frontier",
      rating: 4.5,
      reviewsCount: 1200,
      subTitule:"Live a little and relax with champagne" ,
      description:
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      badge: "Receive 30% discount on extra nights",
      procentaje: 30,
      pricePerNight: "$190",
      oldPrice: "$200",
      imagenUrl: "/img/main-img/search-img-07.png",
    },
    {
      hotelId: "lakeside-motel-warefront",
      name: "Lakeside Motel Warefront",
      rating: 4.5,
      reviewsCount: 1200,
      subTitule: "Live a little and relax with champagne",
      description:
        "Reimagine a divine escape in the heart of the city with Parkside Conservation, parking and a late checkout. Only include Free cancellation applies",
      pricePerNight: "$300",
      descuentoAnyadido: 10,
      oldPrice: "$320",
      imagenUrl: "/img/main-img/search-img-08.png",
    },
  ],
};

export const width-16px = {
  hotel: {
    id: "lakeside-motel-warefront",
    name: "Lakeside Motel Warefront",
    rating: 4.5,
    reviewsCount: 1200,
    address: "Lorem ipsum road, Tantri\n-2322, Melbourne, Australia",
    overviewText:
      "Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.\n\nEach room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property.\n\nCouples in particular like the location – they rated it 9.2 for a two-person trip.",
  },
  topFacilities: [
    { id: "wifi", label: "Free wifi" },
    { id: "ac", label: "Air Conditioning" },
    { id: "parking", label: "Parking available" },
    { id: "business", label: "Business Services" },
    { id: "pool", label: "Swimming pool" },
    { id: "top-rated", label: "Top rated in area" },
  ],
  exploreArea: [
    { name: "Hotel Pennsylvania", distance: "2 min drive" },
    { name: "Travis Bakery store house", distance: "10 min drive" },
    { name: "Olivia Johnson Garden", distance: "15 min drive" },
    { name: "Norman Opera Circus", distance: "18 min drive" },
    { name: "Rockdesert hotel", distance: "32 min drive" },
  ],
  availability: {
    checkin: "Mar 18, 2022",
    checkout: "March 20, 2022",
    guests: "2 adult, 1 room",
  },
  promoCard: {
    title: "20% off\nUse Promotional\nCoupon Code:\nOrlando",
  },
  rooms: [
    {
      id: "standard-twin-multiple-beds",
      name: "Standard twin ben, Multiple beds",
      price: 300,
      currency: "$",
      sleeps: 3,
      beds: "1 double bed and 1 twin bed",
    },
    {
      id: "standard-twin-queen-bed",
      name: "Standard twin ben, 1 Queen bed",
      price: 300,
      currency: "$",
      sleeps: 3,
      beds: "1 double bed and 1 twin bed",
    },
  ],
};