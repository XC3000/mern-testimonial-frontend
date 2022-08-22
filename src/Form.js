import React, { useState } from "react";
import axios from "axios";

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("photo", fileName);
    formData.append("name", "rich1234");
    formData.append("post", "ceo");
    formData.append("description", "lorem");
    try {
      const res = await axios.put(
        "http://localhost:5000/api/testimonial/63035df951ece8e12ec6a900",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  //   const sendData = async () => {
  //     console.log(file);

  //     const formData = new FormData();

  //     formData.append();

  //     const body = {
  //       photo: file,
  //       name: "richard",
  //       post: "CEO",
  //       description: "lorem ipsum",
  //     };

  //     console.log(body);

  //     const data = await instance.post("/testimonial", body);

  //     console.log(data);
  //   };

  return (
    <div className="App">
      <input type="file" onChange={saveFile} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default Form;
