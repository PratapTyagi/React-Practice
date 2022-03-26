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
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.name.length && form.file) {
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
          required
        />
        <input
          type="file"
          name="file"
          placeholder="File"
          onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
