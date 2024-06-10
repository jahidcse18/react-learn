
import React, { useState } from "react";

const Accordion = (props) => {
    return (
        <div>

            <h2>Title : {props.data.title}</h2>
            <h2>Description : {props.data.description}</h2>
        </div>
    );
};
export default Accordion;
