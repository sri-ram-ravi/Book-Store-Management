import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      const response = await axios(`http://localhost:4000/getbook/${id}`);
      if (response.data.bookdetails) {
        setBook(response.data.bookdetails[0]);
        setLoading(false);
      } else {
        setBook({});
        setLoading(false);
      }
    };
    getBook();
  }, []);

  useEffect(() => {
    console.log(book);
  }, [book]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full m-10 max-w-md bg-white border border-gray-200 shadow rounded-lg p-5">
          <h2 className="text-lg font-semibold text-gray-900  mb-2">
            Contact details
          </h2>
          <address className="relative bg-gray-50  p-4 rounded-lg border border-gray-200 not-italic grid grid-cols-2">
            <div className="space-y-2 text-gray-500  leading-loose hidden sm:block">
              Title <br />
              Author <br />
              Publish Year
            </div>
            <div
              id="contact-details"
              className="space-y-2 text-gray-900  font-medium leading-loose"
            >
              {book.title} <br />
              {book.author} <br />{book.publishYear}
            </div>
          </address>
        </div>
      )}
    </>
  );
};

export default ShowBook;
