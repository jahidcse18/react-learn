import React from 'react';

const MenuComponent = ({nav}) => {
    // console.log(nav)
    return (
        <div>
            <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">{nav}</a>
        </div>

    )
        ;
};

export default MenuComponent;