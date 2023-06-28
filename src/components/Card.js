import React from "react";

const Card = ({ name, email, id }) => {
    return (
        <div className="text-center bg-green-200 inline-block rounded-lg hover:transition-all hover:duration-500 origin-center border-3 p-3 m-2 hover:scale-105 cursor-pointer shadow-2xl hover:bg-green-300 click:bg-green-700">
            <img src={`https://robohash.org/${id}?200x200`} alt="a robofriend!" className="pb-5"/>
            <div>
                <h2 className="text-2xl font-bold pb-5">{name}</h2>
                <p className="pb-5">{email}</p>
            </div>
        </div>
    );
}

export default Card;