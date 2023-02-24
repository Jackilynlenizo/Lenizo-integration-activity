import React, { useEffect, useState } from "react";
import axios from "../axios";

const Home = () => {

  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("/quotes?limit=2")
      .then((response) => setQuotes(response.data.quotes))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <><div className="w-screen h-screen bg-[#ffe9ec] flex justify-center content-center items-center"> 
        <div className=" w-[50%] text-center h-screen pt-[80px] ">
            <h1 className=" text-[100px]">Random Quotes for Today...</h1>
            <div className=" font-medium justify-center p-5 border-[6px] border-red-200 rounded-2xl">
                {error !== "" && error}
                {quotes.map((quote, index) => {
                    return (
                        <h3 className="p-6 text-lg" key={index}>
                        {quote.quote} <br/> by {quote.author} </h3>
                        )})}
            </div>
            
        </div>
      </div>
    </>
  );
};

export default Home;
