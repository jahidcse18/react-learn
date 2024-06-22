import React from 'react';

const ChildrenCard = ({childrenDetails}) => {
    // console.log(childrenDetails)
    return (
        <div>
            <a className="active text-blue mx-8" href="#home">{childrenDetails[0]}</a>

            <a className="text-white mx-2" href="#news">{childrenDetails[1]}</a>

            <a className="text-white mx-2" href="#contact">{childrenDetails[2]}</a>

            <a className="text-white mx-2" href="#about">{childrenDetails[3]}</a>

        </div>

    )
        ;
};

export default ChildrenCard;