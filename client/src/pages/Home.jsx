import React, { useEffect, useState } from "react";
import axios from "../axios.js";

import { Loader, FormField, Card } from "../components";

// a component for rendering cards depending on if the search term exist or not.

const RenderCards = ({ data, title }) => {
  if (data?.length >= 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 font-bold text-[#e73535] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  // states
  const [loader, setLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allPosts, setAllPosts] = useState(null);
  const [searchedPosts, setSearchedPosts] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); //seting search term state to comapre it with posts

    setTimeout(() => {
      const searchResult = allPosts.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.prompt.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedPosts(searchResult);
    }, 500);
  };

  useEffect(() => {
    try {
      setLoader(true);
      const fetchPosts = async () => {
        const response = await axios.get("/api/v1/post");
        
        setAllPosts(response.data.data.reverse());
      };

      fetchPosts();
    } catch (error) {
      alert(error);
    } finally {
      setLoader(false);
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[32px] text-[#222328]">
          The Community Showcase
        </h1>
        <p className="text-[14px] text-[#666e75] mt-2 max-w-[700px]">
          Explore a stunning collection of visually captivating and imaginative
          images created by Artistica's advanced AI technology
        </p>
      </div>

      <div className="mt-12">
        <FormField
          labelName="Search Posts"
          type="text"
          name="text"
          placeholder="Search"
          value={searchTerm}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-5">
        {loader ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchTerm && (
              <h2 className="text-[#666e75]">
                Displaying Results for Your Search:{" "}
                <span className="font-bold text-[#000000]">{searchTerm}</span>{" "}
              </h2>
            )}

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3 mt-5">
              {searchTerm ? (
                <RenderCards
                  data={searchedPosts}
                  title="Sorry, we couldn't find any matching results"
                />
              ) : (
                <RenderCards
                  data={allPosts}
                  title="There are currently no posts to display"
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
