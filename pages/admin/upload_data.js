import React, { useState } from "react";

function UploadData(props) {
  const [files, setFiles] = useState("{}");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log("e.target.result", e.target.result);

      setFiles(e.target.result);
    };
  };

  const obj = JSON.parse(files);

  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="form-label inline-block mb-2 text-cyan-700"
          >
            Upload Holidays Json
          </label>
          <input
            className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-cyan-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
            type="file"
            id="formFile"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
      {"uploaded file content -- " + obj[2]?.name}
    </>
  );
}

export default UploadData;
