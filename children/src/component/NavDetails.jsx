import React from 'react';
import MenuComponent from "./MenuComponent.jsx";

// eslint-disable-next-line react/prop-types
const NavDetails = ({navDetail}) => {
    return (
        <div>
            <div className="px-4 py-4">
                <h1 className="text-xl font-bold">Logo</h1>
            </div>
            <nav className="flex-1 px-2 py-4">
                {
                    // eslint-disable-next-line react/prop-types
                    navDetail.map((navobj) => {
                        return <MenuComponent nav={navobj}></MenuComponent>
                    })
                }

            </nav>
        </div>

    );
};

export default NavDetails;