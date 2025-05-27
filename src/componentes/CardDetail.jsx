import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const CardDetail = () => {
  const [character, setCharacterById] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://rickandmortyapi.com/api/character/" + id
      );
      // conversión de la respuesta en formato JSON
      const response = await data.json();

      setCharacterById(response);
    };

    fetchData().catch(console.error);
  }, []);
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-6 flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full max-w-4xl">
          <div className="md:flex">
            {/* Imagen */}
            <div className="md:w-1/3 flex items-center justify-center p-6 bg-gray-200 dark:bg-gray-700">
              <img
                src={character.image}
                alt={character.name}
                className="rounded-lg w-48 h-48 object-cover shadow-md"
              />
            </div>

            {/* Información */}
            <div className="md:w-2/3 p-6 space-y-4">
              <h1 className="text-3xl font-bold">{character?.name}</h1>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Status
                  </p>
                  <p className="text-lg">{character?.status}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Species
                  </p>
                  <p className="text-lg">{character?.species}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Gender
                  </p>
                  <p className="text-lg">{character?.gender}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Episodes
                  </p>
                  <p className="text-lg">{character?.episode?.length}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Origin
                  </p>
                  <p className="text-lg">{character?.origin?.name}</p>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    Location
                  </p>
                  <p className="text-lg">{character?.location?.name}</p>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={character?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Ver en API
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-6 text-center">
        <p className="text-sm">
          Hecho con 💚 por rafedev1110 |{" "}
          <a
            href="https://rickandmortyapi.com"
            className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rick and Morty API
          </a>
        </p>
      </footer>
    </div>
  );
};

export default CardDetail;
