import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const robotArray = robots.map((element, i) => {
        return (
        <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        );
    })
return (
    <div className="text-center">
        { robotArray }
    </div>
);

}

export default CardList;