import React, { /* useEffect, */ useState } from "react";
import Profile from "../componentes/Profile";
import InputGroup from "../componentes/InputGroup";
import Modal from "../componentes/ModalSave";
import Header from "../componentes/Header";

const Welcome = () => {
  /* #OK: Primer reto - Cambiar titulos y parrafos dinamicos */
  /* #OK: Segundo reto - Usar otros eventos en el fomrulario */
  /* #OK: Tercer reto - Crear un boton que esconda el mensaje Welcome */

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [hoverMessage, setHoverMessage] = useState("");
  const [keyPressed, setKeyPressed] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [isStudent, setIsStudent] = useState(false);

  // useEffect(() => {
  //   setIsStudent(true);
  // }, []);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSelectedImage = (file) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <Header />

      <header className="bg-indigo-700 text-white py-12 text-center shadow">
        <h1 className="text-4xl md:text-5xl font-bold">Perfil Dinámico</h1>
        <p className="mt-2 text-lg font-light">
          Interactúa con eventos, imágenes y formularios en React 🚀
        </p>
      </header>

      {/* Contenido principal */}
      <main className=" flex-1 container mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 justify-center items-start">
        {/* Botón de bienvenida */}
        <div className="md:w-1/4">
          <button
            type="button"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full shadow"
            onClick={() => setIsStudent(!isStudent)}
          >
            {isStudent ? "Ocultar mensaje" : "Mostrar mensaje"}
          </button>
          {isStudent && (
            <p className="mt-4 text-lg font-semibold text-purple-800 dark:text-purple-300">
              ¡Bienvenido/a! 😃
            </p>
          )}
        </div>

        {/* Perfil */}
        <div className="md:w-1/3 border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <Profile name={name} lastName={lastName} image={selectedImage} />
        </div>

        {/* Formulario */}
        <div className=" md:w-1/3 border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <InputGroup
              className="text-white"
              label="Nombre"
              placeholder="Escribe tu nombre"
              onChange={handleChange}
              onFocus={() => console.log("Input enfocado")}
              onBlur={() => console.log("Input desenfocado")}
              onInput={() => console.log("Usuario escribiendo...")}
              onKeyDown={(e) => setKeyPressed(e.key)}
            />

            <InputGroup
              label="Descripción"
              type="textarea"
              placeholder="Cuéntanos algo..."
              onChange={handleLastNameChange}
              onDoubleClick={() => alert("¡Doble clic detectado!")}
            />

            <InputGroup
              label="Edad"
              type="range"
              onMouseEnter={() =>
                setHoverMessage("¡Estás sobre el control de edad!")
              }
              onMouseLeave={() => setHoverMessage("")}
            />

            <InputGroup
              label="Foto de perfil"
              type="file"
              accept="image/*"
              onChange={(e) => handleSelectedImage(e.target.files[0])}
            />

            <div className="mt-6">
              <button
                type="button"
                className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setOpenModal(true)}
                disabled={!name || !lastName || !selectedImage}
              >
                Guardar
              </button>
            </div>

            {/* Mensajes de eventos */}
            {hoverMessage && (
              <p className="text-blue-500 mt-2">{hoverMessage}</p>
            )}
            {keyPressed && (
              <p className="text-green-600 mt-2">
                Última tecla presionada: {keyPressed}
              </p>
            )}
            {name && <p className="text-gray-600 mt-2">Hola, {name} 👋</p>}
          </form>
        </div>
      </main>

      {/* Modal */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <h2 className="text-xl font-bold mb-4">Confirmación</h2>
        <p className="text-sm text-gray-700 dark:text-gray-200 mb-6">
          ¿Deseas guardar los datos ingresados?
        </p>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
            onClick={() => setOpenModal(false)}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => {
              alert("Datos guardados");
              setOpenModal(false);
            }}
          >
            Confirmar
          </button>
        </div>
      </Modal>

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

export default Welcome;
