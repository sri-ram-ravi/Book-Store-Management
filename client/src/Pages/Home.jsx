import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../Components/Index";

const Home = () => {
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:4000/getbooks");
        if (response.data.bookdetails) {
          setBooks(response.data.bookdetails);
          setLoading(false);
        } else {
          setBooks([]);
          setLoading(false);
        }
      } catch (error) {
        console.log("Error fetching data", error);
      }
      console.log(books);
    };
    getBookDetails();
  }, []);

  return (
    <div>
      <div className="mt-11">
        <h1 className="text-center text-4xl">Book Store</h1>
      </div>
      <div className="mt-11 flex justify-end">
        <Link
          to="/createbook"
          className="bg-black px-4 py-2 rounded-md text-white text-sm"
        >
          Add Book
        </Link>
      </div>
      <div className="my-11 flex justify-center table-auto">
        {loading ? (
          <Spinner />
        ) : (
          <table className="table w-full border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2">Id</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">Publish Year</th>
                <th className="border px-4 py-2">Show</th>
                <th className="border px-4 py-2">Edit</th>
                <th className="border px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {books.length === 0 ? (
                <tr>
                  <td className="text-center px-4 py-2" colSpan="7">
                    No Data Avaiable
                  </td>
                </tr>
              ) : (
                books.map((bookdetails) => {
                  const count = 0;
                  return (
                    <tr key={bookdetails._id}>
                      <td className="border px-4 py-2 text-center">
                        {count + 1}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {bookdetails.title}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {bookdetails.author}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {bookdetails.publishYear}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <Link to={`/showbook/${bookdetails._id}`}
                          className="bg-black px-2 py-2 rounded-md text-white text-sm"
                        >
                          Show
                        </Link>
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <Link
                          to={`/updatebook/${bookdetails._id}`}
                          className="bg-black px-2 py-2 rounded-md text-white text-sm"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="border px-4 py-2 text-center">
                        <Link
                          to={`/deletebook/${bookdetails._id}`}
                          className="bg-black px-2 py-2 rounded-md text-white text-sm"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
