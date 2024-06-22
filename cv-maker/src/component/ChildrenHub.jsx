import React from 'react';

const ChildrenHub = ({children}) => {
    return (
        <div>

            <aside>{children}</aside>

        </div>
    );
};

export default ChildrenHub;