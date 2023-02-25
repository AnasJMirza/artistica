import React from "react";
import { Card } from './index'

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return data.map((post) => <Card key={post._id} {...post} />);
    }
  
    return (
      <h2 className="mt-5 font-bold text-[#e73535] text-xl uppercase w-[100vh]">{title}</h2>
    );
};

export default RenderCards;