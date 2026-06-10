const sampleListing = [
  {
    title: "Taj Lake Palace",
    description:
      "A floating white marble palace on Lake Pichola offering unmatched royal luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    price: 25000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "The Oberoi Udaivilas",
    description:
      "A grand luxury retreat with lakeside views, domes, and exquisite architecture.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.JQfRshmCHwC4p7qIV9p2JwHaDt?w=329&h=174&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    },
    price: 30000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Taj Falaknuma Palace",
    description:
      "A hilltop palace hotel offering royal suites, breathtaking views, and Nizami hospitality.",
    image: {
      filename: "listingimage",
      url: "https://tse2.mm.bing.net/th/id/OIP.CmZ04eq_R9iGw0j01Vb27AHaE7?cb=ucfimg2&ucfimg=1&w=1000&h=666&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 32000,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "The Leela Palace New Delhi",
    description:
      "A modern palace hotel combining Indian culture with contemporary luxury.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.f71LMFyQqpcQe_1LfOIo5AHaEK?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 22000,
    location: "New Delhi",
    country: "India",
  },
  {
    title: "Aman-i-Khas",
    description:
      "A luxury wilderness camp offering exclusive safari experiences near Ranthambore.",
    image: {
      filename: "listingimage",
      url: "https://tse3.mm.bing.net/th/id/OIP.ZYrovrzpZblMHBHB_ySXLgHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 60000,
    location: "Ranthambore",
    country: "India",
  },
  {
    title: "Amanbagh",
    description:
      "A secluded heritage retreat surrounded by the Aravalli Hills.",
    image: {
      filename: "listingimage",
      url: "https://tse1.mm.bing.net/th/id/OIP.38m8xrXO91kF6wa9aM4W8AHaEw?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 58000,
    location: "Ajabgarh",
    country: "India",
  },
  {
    title: "Six Senses Fort Barwara",
    description:
      "A restored fort transformed into a luxury wellness and heritage resort.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.f5BRZWZ0nCu7r1o2AhONfwHaEu?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 45000,
    location: "Sawai Madhopur",
    country: "India",
  },
  {
    title: "The Oberoi Amarvilas",
    description:
      "A palace-style hotel offering direct views of the Taj Mahal from every room.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.tbbNUKSYRPRLjekYHWPoRAHaEW?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 38000,
    location: "Agra",
    country: "India",
  },
  {
    title: "The Imperial",
    description:
      "New Delhi’s iconic heritage hotel with colonial architecture and lush gardens.",
    image: {
      filename: "listingimage",
      url: "https://tse1.mm.bing.net/th/id/OIP.N45nkti9VrwHFXlbklKEqwHaD9?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 20000,
    location: "New Delhi",
    country: "India",
  },
  {
    title: "Raffles Udaipur",
    description:
      "A tranquil luxury hotel set on a private island in Udaipur.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.3QXcYCNfEpYT2z0JwbTPIQHaFj?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 35000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "The Leela Palace Jaipur",
    description:
      "A lavish royal retreat offering true Rajasthani hospitality.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.lPDTtj3x1jHVeiIEIkfwmQHaEK?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 26000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "The Oberoi Rajvilas",
    description:
      "A luxury resort featuring traditional architecture and serene landscapes.",
    image: {
      filename: "listingimage",
      url: "https://tse3.mm.bing.net/th/id/OIP.Pt3_ZUcT-SHyw8Qo-tI9GwHaDt?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=34",
    },
    price: 33000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "The Johri",
    description:
      "A boutique heritage hotel located in Jaipur’s old jewellery market.",
    image: {
      filename: "listingimage",
      url: "https://tse2.mm.bing.net/th/id/OIP.lzU_7uvmtlaffGxtALPEfQHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 18000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "RAAS Devigarh",
    description:
      "A restored 18th-century palace blending heritage with contemporary design.",
    image: {
      filename: "listingimage",
      url: "https://tse4.mm.bing.net/th/id/OIP.rqzKMtGbUf8KR0Bqf3iy_QHaDt?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 29000,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Taj Rishikesh Resort & Spa",
    description:
      "A serene riverside retreat offering Himalayan views and wellness experiences.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.ocx11Mt1nQLFwmOla8_9HAHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 18000,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "The Kumaon",
    description:
      "A peaceful Himalayan hideaway offering minimalist design and panoramic views.",
    image: {
      filename: "listingimage",
      url: "https://tse1.mm.bing.net/th/id/OIP.Oc6EBHJNT9DIOvXbA77ElwHaD4?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 16000,
    location: "Almora",
    country: "India",
  },
  {
    title: "Six Senses Vana",
    description:
      "A leading wellness retreat offering detox, yoga, and healing therapies.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.30qSqJ11950YiF7pxPq8kQHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 55000,
    location: "Dehradun",
    country: "India",
  },
  {
    title: "Taj Mahal Palace",
    description:
      "Mumbai’s most iconic luxury hotel overlooking the Gateway of India.",
    image: {
      filename: "listingimage",
      url: "https://tse4.mm.bing.net/th/id/OIP.K1V2p2A3gA7-l1NFdzQz9wHaEe?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 24000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Taj Mahal Tower Mumbai",
    description:
      "A modern luxury tower with stunning views of the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/31204963.jpg?k=90c11832231c37a814e9631123bd28820e8ad8cd983b78ad529ea139791653d1&o=&hp=1",
    },
    price: 20000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Soho House Mumbai",
    description:
      "A stylish private-club-style hotel known for its modern aesthetic.",
    image: {
      filename: "listingimage",
      url: "https://tse4.mm.bing.net/th/id/OIP.lfZC9wkkwMYj8wLLMk94EQHaFl?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 28000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "The Oberoi Vanyavilas",
    description:
      "A luxury jungle resort with tented suites near Ranthambore National Park.",
    image: {
      filename: "listingimage",
      url: "https://tse3.mm.bing.net/th/id/OIP.OIkgKiRfKNupcWhvbiVICQHaFW?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 42000,
    location: "Ranthambore",
    country: "India",
  },
  {
    title: "Sujan Jawai",
    description:
      "A wildlife-focused luxury lodge known for leopard spotting.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.K3jb6eCDZYBSQT2OnSsbUgHaFj?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3e",
    },
    price: 50000,
    location: "Bisalpur",
    country: "India",
  },
  {
    title: "Villa Palladio",
    description:
      "A bright, boutique-style palace hotel with unique artistic design.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.X5BNGrGwQfqNH3eHvR4kVwHaJQ?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 15000,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Taj Usha Kiran Palace",
    description:
      "A heritage palace hotel offering royal-style rooms and gardens.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.XjV4Rth5skVoUMPL8LJjcQHaEK?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 16000,
    location: "Gwalior",
    country: "India",
  },
  {
    title: "The Savoy Mussoorie",
    description:
      "A historic heritage hotel on the misty hills of Mussoorie.",
    image: {
      filename: "listingimage",
      url: "https://th.bing.com/th/id/OIP.Qv4TVF47_qd8z3svsjsUCAHaDF?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 14000,
    location: "Mussoorie",
    country: "India",
  },
  {
    title: "The Leela Palace Chennai",
    description:
      "A luxurious palace-style hotel overlooking the Bay of Bengal.",
    image: {
      filename: "listingimage",
      url: "https://tse4.mm.bing.net/th/id/OIP.uuTQkWnZt6ErJIATzJSxeAHaEx?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 20000,
    location: "Chennai",
    country: "India",
  },
  {
    title: "The Oberoi, Gurgaon",
    description:
      "A modern luxury hotel offering world-class design and hospitality.",
    image: {
      filename: "listingimage",
      url: "https://tse3.mm.bing.net/th/id/OIP.JKsy7Yls4Z1znrIwhPtKHQHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    price: 26000,
    location: "Gurgaon",
    country: "India",
  },
  {
    title: "Sitara Himalaya",
    description:
      "A serene mountain escape offering breathtaking Himalayan landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 19000,
    location: "Manali",
    country: "India",
  },

 {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  

]

module.exports = { data: sampleListing }

