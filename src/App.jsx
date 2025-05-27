import React, { useEffect, useState } from "react";
import Card from "./componentes/Card";
import Header from "./componentes/Header";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character");
      // conversión de la respuesta en formato JSON
      const response = await data.json();

      setCharacters(response.results);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <Header />
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 text-white py-20 text-center shadow-lg">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-md">
          The Rick and Morty API
        </h1>
        <p className="mt-4 text-lg font-light">Explore todos los personajes</p>
      </header>

      {/* Characters Grid */}
      <main className="flex-1 px-6 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {characters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </main>

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

export default App;

