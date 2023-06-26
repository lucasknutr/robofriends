import React from "react";
import { robots } from "./robots";

const Card = (props) => {
    return (
        <div className="text-center bg-green-300 inline-block rounded-lg hover:transition-all hover:duration-500 origin-center border-3 p-3 m-2 hover:scale-105 cursor-pointer shadow-2xl">
            <img src={`https://robohash.org/${props.id}`} alt="a robofriend!" />
            <div>
                <h2 className="text-2xl font-bold">{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;