import React, { useEffect, useState } from "react";
import speciesData from "../data/speciesData.js";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import useScrollToTop from "./useScrollToTop";

const SpeciesCard = ({ index, species_name, image }) => {
  return (
    <Tilt className="w-full lg:pt-8 pt-3">
      <Link to={`/species/${species_name}`}>
        <motion.div
          variants={fadeIn("right", "spring", 0.25 * index, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full white-gray-gradient p-[1px] rounded-[20px] shadow-xl shadow-gray-800"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-[20px] py-5 px-3 cursor-pointer flex justify-evenly items-center flex-col bg-white p-4 shadow-md"
          >
            <img
              src={image}
              alt={species_name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2 text-center">
              {species_name}
            </h3>
          </div>
        </motion.div>
      </Link>
    </Tilt>
  );
};

const Explore = () => {
  const [search, setSearch] = useState("");
  const [filterSpecies, setFilterSpecies] = useState([]);
  // console.log(search);

  useScrollToTop();

  const applyFilter = () => {

    let speciesCopy = speciesData.slice();

    if (search) {
      speciesCopy = speciesCopy.filter(item => item.species_name.toLowerCase().includes(search.toLowerCase()));
    }

    setFilterSpecies(speciesCopy);

    // const filteredSpecies = speciesData.filter((species) =>
    //   species.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
  };

  useEffect(() => {
    applyFilter();
  }, [search, speciesData]);

  return (
    <div className="py-36 px-16 bg-black">
      <h2 className="text-2xl font-bold mb-4 text-white">Explore Species</h2>
      <input
        type="text"
        placeholder="Search species..."
        className="border p-2 w-full rounded-lg mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {filterSpecies.map((species, index) => (
          <SpeciesCard key={species.id} index={index} {...species} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
