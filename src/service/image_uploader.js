import axios from "axios";

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    const url = process.env.REACT_APP_CLOUDINARY_URL;
    const preset = process.env.REACT_APP_UPLOAD_PRESET;

    data.append("file", file);
    data.append("upload_preset", preset);

    const result = await axios.post(url, data);
    return await result.data;

    // const result = await fetch(url, {
    //   method: "POST",
    //   body: data,
    // });
    // return await result.json();
  }
}

export default ImageUploader;
