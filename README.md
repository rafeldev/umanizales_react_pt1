# 🧑‍💻 React Profile Form App

Este es un proyecto de práctica en React que tiene como objetivo aprender y aplicar conceptos clave del desarrollo frontend moderno, incluyendo:

- Componentes reutilizables
- Manejo de formularios
- Eventos en JavaScript y React
- Condiciones de renderizado
- Estilos con TailwindCSS
- Manejo de estados con `useState`
- Creación de modales

---

## ✨ Funcionalidades principales

### 🧩 Componente Profile
Se creó un componente llamado `Profile` que recibe props dinámicos (`name`, `lastName`, `image`, `description`) y muestra una tarjeta con los datos del usuario. Este componente es reutilizable.

### 📝 Formulario interactivo
El formulario incluye los siguientes campos:

- `Name` y `Last Name` (input tipo texto)
- `Description` (textarea con doble click)
- `Age` (input tipo `range` con eventos `onMouseEnter` y `onMouseLeave`)
- `Profile Picture` (input tipo `file` con carga de imagen)
- Botón `Save` con validación: se desactiva si no hay nombre o apellido

Se implementaron varios **eventos de JavaScript y React** como:

- `onChange`
- `onSubmit`
- `onFocus` / `onBlur`
- `onInput`
- `onKeyDown`
- `onDoubleClick`
- `onMouseEnter` / `onMouseLeave`

---

## 🧪 Modal personalizado

Al presionar el botón `Save`, se muestra un **modal** si el formulario es válido. El modal puede ser reutilizado para otras funciones. Se usa un estado `openModal` para su visibilidad.

---

## 🛠️ Tecnologías utilizadas

- **React** 18+
- **TailwindCSS** para estilos rápidos y responsivos
- **Vite** como entorno de desarrollo
- HTML semántico y buenas prácticas en JSX

---

## 📁 Estructura del proyecto

src/
├── componentes/
│ └── Profile.jsx
├── pages/
│ └── Welcome.jsx
├── App.jsx
├── main.jsx


---

## 📦 Instalación y ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/react-profile-form.git
   
   cd react-profile-form
   
   npm install
   
   npm run dev
   


## 🧠 Autor y aprendizaje
Este proyecto fue desarrollado como ejercicio de aprendizaje para practicar eventos en React, diseño de componentes reutilizables y mejorar el manejo de formularios en aplicaciones frontend modernas.
