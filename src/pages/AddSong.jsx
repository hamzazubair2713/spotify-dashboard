/* eslint-disable no-unused-vars */
import { useState } from "react";
import { assets } from "../assets/assets";

const AddSong = () => {
  const [formData, setFormData] = useState({
    image: false,
    song: false,
    name: "",
    desc: "",
    album: "none",
  });
  const [albumData, setAlbumData] = useState([]);
  async function handelSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
  }
  return (
    <form
      className="flex flex-col items-start gap-8 text-gray-600"
      onSubmit={handelSubmit}
    >
      <div className="flex gap-8">
        <div className="flex flex-col gap-4">
          <p>Upoad Song</p>
          <input type="file" id="song" name="song" accept="audio/*" hidden />
          <label htmlFor="song">
            <img
              src={assets.upload_song}
              className="w-24 cursor-pointer"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  image: URL.createObjectURL(e.target.file[0]),
                }))
              }
            />
          </label>
        </div>
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input type="file" id="image" accept="image/*" hidden />
          <label htmlFor="image">
            <img
              src={assets.upload_area}
              className="w-24 cursor-pointer"
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Name</p>
        <input
          type="text"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)] "
          placeholder="Type Here..."
          required
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Song Description</p>
        <input
          type="text"
          className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)] "
          placeholder="Type Here..."
          required
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album</p>
        <select className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]">
          <option value="none">None</option>
        </select>
      </div>
      <button
        type="submit"
        className="text-base bg-black text-white py-2.5 px-14 cursor-pointer"
      >
        Add Song
      </button>
    </form>
  );
};

export default AddSong;
