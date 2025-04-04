import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import speciesDetails from "../data/species_data.json";
import PredictedSpeciesDetail from "./PredictedSpeciesDetails";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [speciesInfo, setSpeciesInfo] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null); // Reset prediction when new image is selected
      setSpeciesInfo(null); // Reset species info as well
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null); // Reset prediction when new image is selected
      setSpeciesInfo(null); // Reset species info as well
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Trigger prediction when button is clicked
  const handlePredict = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.species) {
        const predictedSpecies = response.data.species;
        setPrediction(predictedSpecies);

        // Compare with species_details.json and get details
        const details = speciesDetails[predictedSpecies];
        setSpeciesInfo(details);
      }
    } catch (error) {
      console.error("Error during prediction:", error);
      alert("Failed to get prediction. Try again!");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-black pt-36">
        <div
          className="w-96 h-64 border-2 border-dashed cursor-pointer border-gray-400 flex flex-col items-center justify-center text-center rounded-md bg-white"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => document.getElementById("fileInput").click()}
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <p className="text-gray-500">
              Drag & Drop your image here <br />
              or <br />
              Click below to upload
            </p>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
        />

        <button
          onClick={handlePredict}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Predict Species
        </button>

        {/* {prediction && (
        <div className="w-full mt-4 p-4 mx-4 bg-white rounded-md shadow-md">
          <motion.h4
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="text-xl font-semibold inline-block overflow-hidden"
          >
            Predicted Species:{" "}
            <span className="text-2xl font-bold capitalize">{prediction}</span>
          </motion.h4>

          {speciesInfo ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mt-2"
            >
              <p>
                <strong>Scientific Name:</strong> {speciesInfo.scientific_name}
              </p>
              <p>
                <strong>Habitat:</strong> {speciesInfo.habitat}
              </p>
              <p>
                <strong>Distribution:</strong> {speciesInfo.distribution}
              </p>
              <p>
                <strong>Number of Species:</strong>{" "}
                {speciesInfo.number_of_species}
              </p>
              <p>
                <strong>Conservation Status:</strong>{" "}
                {speciesInfo.conservation_status}
              </p>
              <p>
                <strong>Diet:</strong> {speciesInfo.diet}
              </p>
              <p>
                <strong>Size:</strong> {speciesInfo.size}
              </p>
              <p>
                <strong>Weight:</strong> {speciesInfo.weight}
              </p>
              <p>
                <strong>Lifespan:</strong> {speciesInfo.lifespan}
              </p>
            </motion.div>
          ) : (
            <p>No information available.</p>
          )}
        </div>
      )} */}
      </div>


      {prediction && <PredictedSpeciesDetail prediction={prediction} />}

      
    </>
  );
};

export default ImageUpload;
