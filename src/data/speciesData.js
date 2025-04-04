const speciesData = [
    {
      id: 1,
      species: "acadian_redfish",
      species_name: "Acadian Redfish",
      scientific_name: "Sebastes fasciatus",
      habitat: "Deep waters over rocky, mud, or clay ocean bottoms",
      distribution: "Northwest Atlantic, from Iceland to the Gulf of Maine",
      number_of_species: "Single species",
      conservation_status: "Not o verfished",
      diet: "Small invertebrates and fish",
      size: "Up to 18-20 inches (45-50 cm)",
      weight: "Not specified",
      lifespan: "50 years or more",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740852143/download_jshvc5.webp",
      locations: [
        { lat: 25.7617, lng: -80.1918 }, // Miami, USA
        { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
        { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      ],
    },
    {
      id: 2,
      species: "adriatic_sturgeon",
      species_name: "Adriatic Sturgeon",
      scientific_name: "Acipenser naccarii",
      habitat: "Freshwater rivers and coastal marine waters",
      distribution: "Endemic to the Adriatic Sea and its tributaries",
      number_of_species: "Single species",
      conservation_status: "Critically Endangered",
      diet: "Benthic invertebrates and small fish",
      size: "Up to 6.6 feet (2 meters)",
      weight: "Up to 176 pounds (80 kg)",
      lifespan: "Up to 50 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740852529/images_jhyjmb.jpg",
      locations: [
        { lat: -33.918861, lng: 18.423300 }, // Cape Town, South Africa
        { lat: 19.0760, lng: 72.8777 }, // Mumbai, India
        { lat: -13.8333, lng: -76.2500 }, // Peru
      ],
    },
    {
      id: 3,
      species: "african_coelacanth",
      species_name: "African Coelacanth",
      scientific_name: "Latimeria chalumnae",
      habitat: "Deep marine waters, typically in caves and steep slopes",
      distribution: "Western Indian Ocean, near the Comoros and Madagascar",
      number_of_species: "Single species",
      conservation_status: "Critically Endangered",
      diet: "Fish and cephalopods",
      size: "Up to 6.5 feet (2 meters)",
      weight: "Up to 198 pounds (90 kg)",
      lifespan: "Estimated up to 60 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740852586/download_xqydvn.jpg",
      locations: [
        { lat: 64.1355, lng: -21.8954 }, // Reykjavik, Iceland
        { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
        { lat: -54.8019, lng: -68.3030 }, // Ushuaia, Argentina
      ],
    },
    {
      id: 4,
      species: "alabama_shad",
      species_name: "Alabama Shad",
      scientific_name: "Alosa alabamae",
      habitat: "Freshwater rivers and coastal marine waters",
      distribution: "Southeastern United States, Gulf of Mexico drainages",
      number_of_species: "Single species",
      conservation_status: "Near Threatened",
      diet: "Plankton, small fish, and invertebrates",
      size: "Up to 18 inches (45 cm)",
      weight: "Up to 3 pounds (1.4 kg)",
      lifespan: "Up to 5 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740852727/download_hpn96w.jpg",
      locations: [
        { lat: 25.7617, lng: -80.1918 }, // Miami, USA
        { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
        { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      ],
    },
    {
      id: 5,
      species: "alaska_pollock",
      species_name: "Alaska Pollock",
      scientific_name: "Gadus chalcogrammus",
      habitat: "Pelagic marine waters",
      distribution: "North Pacific Ocean, especially the Bering Sea",
      number_of_species: "Single species",
      conservation_status: "Not overfished",
      diet: "Plankton, small fish, and crustaceans",
      size: "Up to 3.3 feet (1 meter)",
      weight: "Up to 2.2 pounds (1 kg)",
      lifespan: "Up to 15 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740852827/images_hiboxp.jpg",
      locations: [
        { lat: -33.918861, lng: 18.423300 }, // Cape Town, South Africa
        { lat: 19.0760, lng: 72.8777 }, // Mumbai, India
        { lat: -13.8333, lng: -76.2500 }, // Peru
      ],
    },
    {
      id: 6,
      species: "almaco_jack",
      species_name: "Almaco Jack",
      scientific_name: "Seriola rivoliana",
      habitat: "Deep oceanic waters near reefs and wrecks",
      distribution: "Worldwide in tropical and subtropical oceans",
      number_of_species: "Single species",
      conservation_status: "Not specified",
      diet: "Fish, squid, and crustaceans",
      size: "Up to 36 inches (91 cm)",
      weight: "Typically 10-20 pounds (4.5-9 kg), can exceed 50 pounds (22.7 kg)",
      lifespan: "Not specified",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853025/images_bu8xi3.jpg",
      locations: [
      { lat: 64.1355, lng: -21.8954 }, // Reykjavik, Iceland
      { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
      { lat: -54.8019, lng: -68.3030 }, // Ushuaia, Argentina
    ],
    },
    {
      id: 7,
      species: "american_plaice",
      species_name: "American Plaice",
      scientific_name: "Hippoglossoides platessoides",
      habitat: "Bottom-dwelling in cold marine waters",
      distribution: "Northwest Atlantic, from Greenland to Rhode Island",
      number_of_species: "Single species",
      conservation_status: "Not overfished",
      diet: "Small invertebrates and fish",
      size: "Up to 24 inches (61 cm)",
      weight: "Up to 4 pounds (1.8 kg)",
      lifespan: "Up to 30 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853236/images_gvztja.jpg",
      locations: [
        { lat: 25.7617, lng: -80.1918 }, // Miami, USA
        { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
        { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      ],
    },
    {
      id: 8,
      species: "argentine_angelshark",
      species_name: "Argentine Angelshark",
      scientific_name: "Squatina argentina",
      habitat: "Sandy or muddy bottoms of continental shelves",
      distribution: "Southwest Atlantic, off the coasts of Argentina and Uruguay",
      number_of_species: "Single species",
      conservation_status: "Data Deficient",
      diet: "Fish and invertebrates",
      size: "Up to 5 feet (1.5 meters)",
      weight: "Not specified",
      lifespan: "Not specified",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853289/download_hjwrse.jpg",
      locations: [
        { lat: -33.918861, lng: 18.423300 }, // Cape Town, South Africa
        { lat: 19.0760, lng: 72.8777 }, // Mumbai, India
        { lat: -13.8333, lng: -76.2500 }, // Peru
      ],
    },
    {
      id: 9,
      species: "arrowtooth_flounder",
      species_name: "Arrowtooth Flounder",
      scientific_name: "Atheresthes stomias",
      habitat: "Bottom-dwelling in cold marine waters",
      distribution: "North Pacific Ocean, from California to Alaska",
      number_of_species: "Single species",
      conservation_status: "Not overfished",
      diet: "Fish and invertebrates",
      size: "Up to 28 inches (71 cm)",
      weight: "Up to 8 pounds (3.6 kg)",
      lifespan: "Up to 27 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853331/download_perwxe.jpg",
      locations: [
      { lat: 64.1355, lng: -21.8954 }, // Reykjavik, Iceland
      { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
      { lat: -54.8019, lng: -68.3030 }, // Ushuaia, Argentina
    ],
    },
    {
      id: 10,
      species: "atlantic_bigeye_tuna",
      species_name: "Atlantic Bigeye Tuna",
      scientific_name: "Thunnus obesus",
      habitat: "Open ocean, epipelagic to mesopelagic zones",
      distribution: "Tropical and subtropical waters of the Atlantic Ocean",
      number_of_species: "Single species",
      conservation_status: "Vulnerable",
      diet: "Fish, squid, and crustaceans",
      size: "Up to 8.2 feet (2.5 meters)",
      weight: "Up to 400 pounds (180 kg)",
      lifespan: "Up to 10 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853432/download_vttzzn.jpg",
      locations: [
        { lat: 25.7617, lng: -80.1918 }, // Miami, USA
        { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
        { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      ],
    },
    {
      id: 11,
      species: "atlantic_blacktip_shark",
      species_name: "Atlantic Blacktip Shark",
      scientific_name: "Carcharhinus limbatus",
      habitat: "Coastal and offshore waters",
      distribution: "Worldwide in tropical and subtropical waters",
      number_of_species: "Single species",
      conservation_status: "Near Threatened",
      diet: "Fish, squid, and crustaceans",
      size: "Up to 8.4 feet (2.5 meters)",
      weight: "Up to 220 pounds (100 kg)",
      lifespan: "Up to 12 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853566/images_csexlx.jpg",
      locations: [
        { lat: -33.918861, lng: 18.423300 }, // Cape Town, South Africa
        { lat: 19.0760, lng: 72.8777 }, // Mumbai, India
        { lat: -13.8333, lng: -76.2500 }, // Peru
      ],
    },
    {
      id: 12,
      species: "basking_shark",
      species_name: "Basking Shark",
      scientific_name: "Cetorhinus maximus",
      habitat: "Temperate coastal waters and open oceans, often near the surface.",
      distribution: "Widely distributed in temperate oceans, including the North Atlantic, North Pacific, and Mediterranean Sea.",
      number_of_species: "1 (It is the only species in the genus Cetorhinus).",
      conservation_status: "Endangered (due to overfishing and habitat disturbance).",
      diet: "Plankton, small fish, and invertebrates. It is a filter feeder.",
      size: "Average length of 6–8 meters, but can grow up to 12 meters.",
      weight: "Typically weighs around 4–6 tons.",
      lifespan: "Estimated to be around 30–50 years.",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853756/images_m6eaqu.jpg",
      locations: [
      { lat: 64.1355, lng: -21.8954 }, // Reykjavik, Iceland
      { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
      { lat: -54.8019, lng: -68.3030 }, // Ushuaia, Argentina
    ],
    },
    {
      id: 13,
      species: "hammerhead_shark",
      species_name: "Hammerhead Shark",
      scientific_name: "Sphyrnidae",
      habitat: "Coastal warm waters, continental shelves, and deep oceanic waters.",
      distribution: "Worldwide in tropical and temperate oceans, including the Atlantic, Pacific, and Indian Oceans.",
      number_of_species: "9 (including the Great Hammerhead, Scalloped Hammerhead, and Smooth Hammerhead).",
      conservation_status: "Critically Endangered to Vulnerable (varies by species, mainly due to overfishing and finning).",
      diet: "Fish, squid, octopuses, and crustaceans. Some species also eat other sharks and rays.",
      size: "Ranges from 0.9 to 6 meters depending on the species. The Great Hammerhead can reach up to 6 meters.",
      weight: "From 3 kg to over 450 kg depending on the species.",
      lifespan: "20–30 years on average.",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853895/download_ak5sae.jpg",
      locations: [
        { lat: 25.7617, lng: -80.1918 }, // Miami, USA
        { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
        { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      ],
    },
    {
      id: 14,
      species: "octopus",
      species_name: "Octopus",
      scientific_name: "Octopoda (order)",
      habitat: "Marine environments, from shallow coastal waters to deep ocean floors",
      distribution: "Worldwide in oceans, from tropical reefs to polar regions",
      number_of_species: "Approximately 300 species",
      conservation_status: "Varies by species; some are not threatened, while others may be at risk",
      diet: "Crustaceans, mollusks, fish, and other small marine animals",
      size: "Arm spans range from a few centimeters to over 30 feet (9 meters) in the giant Pacific octopus",
      weight: "From less than an ounce to over 150 pounds (70 kg)",
      lifespan: "Typically 1-2 years; larger species may live up to 5 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740853960/images_phhdtn.jpg",
      locations: [
        { lat: -33.918861, lng: 18.423300 }, // Cape Town, South Africa
        { lat: 19.0760, lng: 72.8777 }, // Mumbai, India
        { lat: -13.8333, lng: -76.2500 }, // Peru
      ],
    },
    {
      id: 15,
      species: "tiger_shark",
      species_name: "Tiger Shark",
      scientific_name: "Galeocerdo cuvier",
      habitat: "Coastal and open ocean waters, often near coral reefs and estuaries",
      distribution: "Tropical and subtropical oceans worldwide",
      number_of_species: "Single species",
      conservation_status: "Near Threatened",
      diet: "Fish, seals, birds, squid, turtles, sea snakes, and even inedible objects",
      size: "Commonly 10-14 feet (3-4.3 meters); can reach up to 18 feet (5.5 meters)",
      weight: "850-1,400 pounds (385-635 kg)",
      lifespan: "Up to 12 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740854070/images_v6fci8.jpg",
      locations: [
      { lat: 64.1355, lng: -21.8954 }, // Reykjavik, Iceland
      { lat: 37.7749, lng: -122.4194 }, // San Francisco, USA
      { lat: -54.8019, lng: -68.3030 }, // Ushuaia, Argentina
    ],
    },
    {
      id: 16,
      species: "whale_shark",
      species_name: "Whale Shark",
      scientific_name: "Rhincodon typus",
      habitat: "Warm, tropical ocean waters; often found in open seas and near coastal areas",
      distribution: "Worldwide in tropical and warm temperate seas",
      number_of_species: "Single species",
      conservation_status: "Endangered",
      diet: "Plankton, small fish, and squid",
      size: "Up to 60 feet (18 meters)",
      weight: "Up to 20.6 tons (18.7 metric tonnes)",
      lifespan: "Estimated 60-100 years",
      image: "https://res.cloudinary.com/dm8ca7qod/image/upload/v1740854227/download_netrtt.jpg",
      locations: [
        { lat: 25.7617, lng: -80.1918 }, // Miami, USA
        { lat: 35.6895, lng: 139.6917 }, // Tokyo, Japan
        { lat: -33.8688, lng: 151.2093 }, // Sydney, Australia
      ],
    }
]

  
  export default speciesData;