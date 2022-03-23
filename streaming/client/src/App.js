import axios from "axios";

import { useState } from "react";
import "./App.css";

const App = () => {
  const [form, setForm] = useState({
    name: "",
    file: "",
  });

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.id === "file")
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    else setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.name.length && form.file.length) {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("fileData", form.file);
      try {
        const data = await axios.post("http://localhost:5000/form", formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        });
        console.log(data);
        setForm({ name: "", file: "" });
      } catch (error) {
        setForm({ name: "", file: "" });
        console.log(error);
      }
    } else return;
  };

  return (
    <div className="app">
      <h2>File form</h2>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        />
        <input type="file" name="file" placeholder="File" onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
