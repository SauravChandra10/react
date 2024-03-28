import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
      <img
        className="w-24 h-24 rounded-full mx"
        src="https://images.pexels.com/photos/19906220/pexels-photo-19906220/free-photo-of-a-tunnel-with-a-white-wall-and-a-door.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 space-y-4">
        <blockquote>
          <p className="text-lg">{props.text}</p>
        </blockquote>
        <figcaption>
          <div>Sarah Dayan</div>
          <div>Staff Engineer, Algolia</div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Card;
