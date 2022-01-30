import React, { useEffect, useState } from "react";
import "./App.css";
import { userDataFunction } from "./api.js";

function App() {
  const [nameImage, setNameImage] = useState([]);
  const [nextIndex, setNextIndex] = useState(0);

  const getUserData = async (index) => {
    const users = await userDataFunction(index);
    return users[0];
  };

  useEffect(() => {
    getUserData(0);
  }, []);

  const nameImageFunc = async (info) => {
    info = await info;
    const { title, first, last } = info.name;
    const { medium } = info.picture;
    const { email } = info;
    setNameImage((prevState) => [
      ...prevState,
      { name: `${title} ${first} ${last}`, image: medium, email },
    ]);
  };

  return (
    <div className="app">
      <button
        onClick={() => {
          nameImageFunc(getUserData(nextIndex));
          setNextIndex((prevState) => ++prevState);
        }}
      >
        NameImage
      </button>
      <div className="infos">
        {nameImage.map((data) => (
          <React.Fragment key={data.email}>
            <p>{data.name}</p>
            <img src={data.image} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
