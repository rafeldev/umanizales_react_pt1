import React from "react";

const Profile = (props) => {
  const { image, /*  titulo, description, */ name, lastName } = props;
  console.log("🚀 ~ Profile ~ image:", image);

  return (
    <div className="max-w-sm rounded-md shadow-lg">
      {image ? (
        <img className="w-full" src={image} alt="profile" width={400} />
      ) : (
        <img
          className="w-full"
          src="https://placehold.co/400"
          alt="profiless"
          width={400}
        />
      )}

      <div className="px-6 py-4">
        {/* <h1 className="text-3xl font-bold underline">{titulo}</h1> */}
        <h1 className="text-3xl font-bold underline">{name}</h1>

        {/* <p>{description}</p> */}
        <p>{lastName}</p>
      </div>

      <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Compartir
        </button>
      </div>
    </div>
  );
};

export default Profile;
