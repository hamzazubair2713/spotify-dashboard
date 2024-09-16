/* eslint-disable no-unused-vars */
import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";

const AddSong = () => {
  const url = "http://localhost:4009";
  const [formData, setFormData] = useState({
    song: false,
    image: false,
    name: "",
    desc: "",
    album: "none",
  });
  const [albumData, setAlbumData] = useState({});
  const [loading, setLoading] = useState(false);
  const convertToFormData = (obj) => {
    const formData = new FormData();

    Object.keys(obj).forEach((key) => {
      formData.append(key, obj[key]);
    });
    return formData;
  };
  async function handelSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("desc", formData.desc);
    data.append("image", formData.image);
    data.append("audio", formData.song);
    data.append("album", formData.album);
    // const data = convertToFormData(formData);
    const resp = await axios.post(`${url}/api/song/add`, data);
    console.log(resp);
  }
  return (
    <>
      {loading ? (
        <div className="grid place-items-center min-h-[80vh]">
          <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin " />
        </div>
      ) : (
        <form
          className="flex flex-col items-start gap-8 text-gray-600"
          onSubmit={handelSubmit}
        >
          <div className="flex gap-8">
            <div className="flex flex-col gap-4">
              <p>Upoad Song</p>
              <input
                type="file"
                id="song"
                name="song"
                accept="audio/*"
                hidden
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    song: e.target.files[0],
                  }))
                }
              />
              <label htmlFor="song">
                <img
                  src={formData.song ? assets.upload_added : assets.upload_song}
                  className="w-24 cursor-pointer"
                />
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <p>Upload Image</p>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                hidden
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, image: e.target.files[0] }))
                }
              />
              <label htmlFor="image">
                <img
                  src={
                    formData.image
                      ? URL.createObjectURL(formData.image)
                      : assets.upload_area
                  }
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
              name="song_name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <p>Song Description</p>
            <input
              type="text"
              className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)] "
              placeholder="Type Here..."
              required
              name="desc"
              value={formData.desc}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, desc: e.target.value }))
              }
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <p>Album</p>
            <select
              className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, album: e.target.value }))
              }
            >
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
      )}
    </>
  );
};

export default AddSong;
