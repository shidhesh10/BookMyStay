const sampleListings = [
  // --- TRENDING & ROOMS ---
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&auto=format&fit=crop&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "Rooms",
  },
  {
    title: "Beachfront Paradise",
    description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "Trending",
  },
  {
    title: "Modern Apartment in Tokyo",
    description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "Iconic Cities",
  },
  {
    title: "Historic Brownstone in Boston",
    description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      // FIXED: Authentic Boston Beacon Hill street
      url: "https://images.unsplash.com/photo-1740151369510-9a7a72bf4091?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "Iconic Cities",
  },

  // --- ICONIC CITIES ---
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1741951677479-01551f0151af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "Iconic Cities",
  },
  {
    title: "Historic Canal House",
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?w=800&auto=format&fit=crop&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "Iconic Cities",
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      // FIXED: High-end city apartment interior with view
      url: "https://images.unsplash.com/photo-1706578314787-be50d411a46b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "Iconic Cities",
  },

  // --- MOUNTAINS ---
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "Mountains",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "Mountains",
  },
  {
    title: "Mountain View Cabin in Banff",
    description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&auto=format&fit=crop&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "Mountains",
  },

  // --- CASTLES ---
  {
    title: "Historic Castle in Scotland",
    description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      // FIXED: Dunnottar Castle (Iconic Scottish look)
      url: "https://images.unsplash.com/photo-1578240748485-ad93c9c30aea?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "Castles",
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1528114039593-4366cc08227d?w=800&auto=format&fit=crop&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "Castles",
  },

  // --- AMAZING POOLS ---
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&auto=format&fit=crop&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "Amazing Pools",
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&auto=format&fit=crop&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "Amazing Pools",
  },
  {
    title: "Beachfront Villa in Greece",
    description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?w=800&auto=format&fit=crop&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "Amazing Pools",
  },

  // --- CAMPING ---
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      // FIXED: Luxury Safari Tent interior/exterior
      url: "https://images.unsplash.com/photo-1723643750330-c868b56af36f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "Camping",
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      // FIXED: Cozy cabin in the trees
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    category: "Camping",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      // FIXED: Authentic wooden treehouse structure
      url: "https://plus.unsplash.com/premium_photo-1685305380695-90e58a33d4e9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "Camping",
  },

  // --- FARMS ---
  {
    title: "Rustic Cabin by the Lake",
    description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&auto=format&fit=crop&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "Farms",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800&auto=format&fit=crop&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "Farms",
  },
  {
    title: "Vineyard Estate in Napa",
    description: "Stay in a luxurious estate surrounded by rolling vineyards. Perfect for wine lovers and relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&auto=format&fit=crop&q=60",
    },
    price: 2800,
    location: "Napa Valley",
    country: "United States",
    category: "Farms",
  },

  // --- ARCTIC ---
  {
    title: "Glass Igloo in Lapland",
    description: "Watch the Northern Lights from the comfort of your warm glass igloo in the snowy wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1764942394410-5b3f027b459b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1800,
    location: "Rovaniemi",
    country: "Finland",
    category: "Arctic",
  },
  {
    title: "Icelandic Glacier Hut",
    description: "A remote and rugged hut situated near a breathtaking glacier. Experience the raw beauty of Iceland.",
    image: {
      filename: "listingimage",
      // FIXED: Black wooden cabin in snow
      url: "https://images.unsplash.com/photo-1498063401574-13cbee350467?w=800&auto=format&fit=crop&q=60",
    },
    price: 1300,
    location: "Vik",
    country: "Iceland",
    category: "Arctic",
  },

  // --- DOMS (Domes) ---
  {
    title: "Geodesic Dome in Patagonia",
    description: "Stay in a sustainable geodesic dome with panoramic views of the Torres del Paine mountains.",
    image: {
      filename: "listingimage",
      // FIXED: EcoCamp Patagonia Domes
      url: "https://images.unsplash.com/photo-1743019486333-e9f7032b912e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 1600,
    location: "Torres del Paine",
    country: "Chile",
    category: "Doms",
  },
  {
    title: "Desert Dome Glamping",
    description: "A futuristic dome stay in the middle of the high desert. Stargazing here is unmatched.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&auto=format&fit=crop&q=60",
    },
    price: 900,
    location: "Joshua Tree",
    country: "United States",
    category: "Doms",
  },

  // --- HOUSE BOATS ---
  {
    title: "Luxury Houseboat in Kerala",
    description: "Drift along the serene backwaters of Kerala in a traditional yet luxurious houseboat.",
    image: {
      filename: "listingimage",
      // FIXED: Traditional Kettuvallam boat
      url: "https://images.unsplash.com/photo-1633268196395-1293583457a9?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 3500,
    location: "Alleppey",
    country: "India",
    category: "House Boat",
  },
  {
    title: "Dal Lake Floating Palace",
    description: "Experience the heritage of Kashmir on a beautifully carved wooden houseboat on Dal Lake.",
    image: {
      filename: "listingimage",
      // FIXED: Dal Lake Shikara/Boat
      url: "https://images.unsplash.com/photo-1614591276564-7b3e69347a48?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4000,
    location: "Srinagar",
    country: "India",
    category: "House Boat",
  },

  // --- DESERTS ---
  {
    title: "Desert Oasis in Dubai",
    description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&auto=format&fit=crop&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Deserts",
  },
  {
    title: "Wadi Rum Martian Tent",
    description: "Sleep under the stars in a luxury tent in the heart of the red desert of Wadi Rum.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=60",
    },
    price: 1500,
    location: "Wadi Rum",
    country: "Jordan",
    category: "Deserts",
  },
  {
    title: "Sahara Luxury Camp",
    description: "Ride camels to your luxury tent deep in the Sahara dunes. Traditional music and cuisine included.",
    image: {
      filename: "listingimage",
      // FIXED: Tents in the sand dunes
      url: "https://images.unsplash.com/photo-1695131486048-3987c6162f19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2200,
    location: "Merzouga",
    country: "Morocco",
    category: "Deserts",
  },
  {
    title: "Rajasthan Desert Fort",
    description: "Live like a Maharaja in this converted desert fort hotel. Stunning architecture and history.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&auto=format&fit=crop&q=60",
    },
    price: 3200,
    location: "Jaisalmer",
    country: "India",
    category: "Deserts",
  },
];

module.exports = { data: sampleListings };