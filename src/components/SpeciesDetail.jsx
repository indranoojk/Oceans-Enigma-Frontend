import React from "react";
import { useParams } from "react-router-dom";
import speciesData from "../data/speciesData";
import { motion } from "framer-motion";
import { textUp, textLeft, textRight } from "../utils/motion";
import useScrollToTop from "./useScrollToTop";
import MapComponent from "./MapComponent";


const SpeciesDetail = () => {
  const { species_name } = useParams();
  const species = speciesData.find((s) => s.species_name === species_name);
  // const { id } = useParams();
  // const species = speciesData.find((s) => s.id === parseInt(id));
  useScrollToTop();


  if (!species) {
    return <div className="p-6 text-red-500">Species not found.</div>;
  }

  return (
    <>
      <div className="py-36 px-28 bg-black text-white">
        <div className="text-center items-center lg:grid lg:grid-cols-2 mt-6 lg:mt-8">
          <motion.div
            variants={textLeft()}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: true, amount: 0.25 }}
            className=""
          >
            <img
              className="w-full h-72 object-cover rounded-xl"
              src={species.image}
              alt={species.species_name}
            />
          </motion.div>
          <div className="mt-4 lg:mt-0">
            <motion.div
              variants={textRight()}
              // initial="hidden"
              // whileInView="show"
              // viewport={{ once: true, amount: 0.25 }}
              className="text-3xl lg:text-4xl font-bold"
            >
              {species.species_name}
            </motion.div>
            <motion.div
            variants={textUp()}
            // initial='hidden'
            // whileInView='show'
            // viewport={{ once: true, amount: 0.25 }}
            className="text-xl italic lg:text-2xl"
          >
            {species.scientific_name}
          </motion.div>
          </div>
        </div>
        <motion.div
          variants={textLeft()}
          // initial="hidden"
          // whileInView="show"
          // viewport={{ once: true, amount: 0.25 }}
          className="m-8 lg:m-16"
        >
          <motion.p
            variants={textLeft()}
            // initial="hidden"
            // whileInView="show"
            className="px-2 lg:px-16 text-wrap font-serif py-4 -tracking-tight"
          >
            <span className="text-xl font-bold">Habitat: </span>{" "}
            <span className="text-lg">{species.habitat}</span>
            <br />
            <span className="text-xl font-bold">Distribution: </span>{" "}
            <span className="text-lg">{species.distribution}</span>
            <br />
            <span className="text-xl font-bold">Number of Species: </span>{" "}
            <span className="text-lg">{species.number_of_species}</span>
            <br />
            <span className="text-xl font-bold">Conservation Status: </span>{" "}
            <span className="text-lg">{species.conservation_status}</span>
            <br />
            <span className="text-xl font-bold">Diet: </span>{" "}
            <span className="text-lg">{species.diet}</span>
            <br />
            <span className="text-xl font-bold">Size: </span>{" "}
            <span className="text-lg">{species.size}</span>
            <br />
            <span className="text-xl font-bold">Weight: </span>{" "}
            <span className="text-lg">{species.weight}</span>
            <br />
            <span className="text-xl font-bold">Lifespan: </span>{" "}
            <span className="text-lg">{species.lifespan}</span>
            <br />
          </motion.p>
          {/* {project.content} */}
        </motion.div>


        <div className="mt-4">
          <h2 className="text-xl font-bold">{species.species_name} Locations</h2>
          <MapComponent locations={species.locations} />
        </div>

      </div>
    </>
  );
};

export default SpeciesDetail;
