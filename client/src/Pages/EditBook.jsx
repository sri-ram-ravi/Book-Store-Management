import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { Spinner } from "../Components/Spinner";
import axios from "axios";
const EditBook = () => {
  const {id}=useParams()
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const Title = useRef();
  const Author = useRef();
  const PublishYear = useRef();
  useEffect(()=>{
    const getBookdetails=async()=>{
      try{
        setLoading(true)
        const response=await axios.get(`http://localhost:4000/getbook/${id}`)
        Title.current.value=response.data.bookdetails[0].title;
        Author.current.value=response.data.bookdetails[0].author;
        PublishYear.current.value=response.data.bookdetails[0].publishYear;
        setLoading(false)
      }catch(error){
        setLoading(false)
        console.log('Error',error)
      }
    }
    getBookdetails();
  },[])
  async function handleValue(event) {
    event.preventDefault();
    try {
      const createBook = {
        title: Title.current.value,
        author: Author.current.value,
        publishYear: PublishYear.current.value,
      };
      // console.log(createBook);
      setLoading(true);
      await axios.put(`http://localhost:4000/updatebook/${id}`, createBook);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  }
  return (
    <>
      <h1 className="text-center my-14 text-5xl">Edit Book Details</h1>
      <form className="max-w-sm mx-auto my-12" onSubmit={handleValue}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Title
          </label>
          <input
            type="text"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Enter Book Title"
            required
            ref={Title}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Author
          </label>
          <input
            type="text"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            placeholder="Enter Author"
            required
            ref={Author}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Publish Year
          </label>
          <input
            type="text"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
            placeholder="Enter Publish Year"
            ref={PublishYear}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default EditBook