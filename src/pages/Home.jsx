import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const a = await fetch("https://dummyjson.com/recipes");
      const result = await a.json();
      setData(result.recipes);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <div className="grid lg:md:grid-cols-4 sm:grid-cols-1 gap-6">
          {loading ? (
            <p className="text-2xl text-[#052427] font-bold text-center w-full">
              Loading...
            </p>
          ) : (
            data.map((each) => (
              <div
                key={each.id}
                onClick={() => navigate(`/product/${each.id}`)}
                className="border-2 border-gray-400 cursor-pointer p-4 rounded-lg hover:scale-105 transition"
              >
                <h1 className="text-xl font-bold text-[#052427]">
                  {each.name}
                </h1>
                <p className="my-2 text-m">
                  Rating : {each.rating} | Meal Type : {each.mealType}
                </p>
                <p className="mt-2 grid grid-cols-3 gap-1">
                  {each.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="p-1 bg-blue-300 rounded-lg text-center text-sm"
                    >
                      {" "}
                      #{tag}
                    </span>
                  ))}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
