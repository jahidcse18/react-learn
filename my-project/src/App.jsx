
import {useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Accordion from "./component/Accrodion.jsx";

const infos = [
    {
        id          : 1,
        title       : "how to run car",
        description :  "have to know how to car by training"
    },
    {
        id          : 2,
        title       : "how to swimming",
        description : "you should make sure all your security"
    },
    {
        id          : 3,
        title       : "how to success",
        description :  "Work hard and do more as you know"
    },
    {
        id          : 4,
        title       : "Nextbit solution development team",
        description :  "In our team we have 12 developer 3 marketing people"
    },
    {
        id          : 5,
        title       : "learn react",
        description :  "Should focus on trainer training and discuss with him"
    },
    {
        id          : 6,
        title       : "Archive record",
        description :  "As you want to learn you should archive your records properly"
    },
    {
        id          : 7,
        title       : "how to success",
        description :  "Work hard and do more as you know"
    },
    {
        id          : 8,
        title       : "Nextbit solution development team",
        description :  "In our team we have 12 developer 3 marketing people"
    },
    {
        id          : 9,
        title       : "learn react",
        description :  "Should focus on trainer training and discuss with him"
    },
    {
        id          : 10,
        title       : "Archive record",
        description :  "As you want to learn you should archive your records properly"
    }
];
function App() {


    const [accrodionValue, setaccrodionValue] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState(accrodionValue);
    useEffect(() => {
        setaccrodionValue(infos.slice(0,4))
    }, []);
    const handleShow = () => {
        setaccrodionValue(infos);
    };
    const handleSearchText = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const filteredData = accrodionValue.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setSearchResult(filteredData);
    };
    const accrodionDetails = searchValue ? searchResult : accrodionValue;

    return (
        <>
        <div className="container mx-auto ">
            <div className="w-1/3 mx-auto p-3">
                <form className="my-5" onSubmit={handleSearch}>
                    <div className="flex items-center justify-between border-2">
                        <input
                            className="form-input border-none p-3 w-4/5"
                            type="search"
                            name="search"
                            id="search"
                            value={searchValue}
                            placeholder="Search FAQ"
                            onChange={handleSearchText}
                        />
                        <button className="w-1/5 flex justify-center" type="submit">
                            <FaSearch className="text-2xl me-3"/>
                        </button>
                    </div>
                </form>
                <div className="py-3">
                    {
                        accrodionDetails.map((info) => {
                            return <Accordion data={info}/>
                        })
                    }
                </div>
                <div className="text-center">
                    {
                        <button
                            className="my-4 py-2 px-4 bg-blue-500 text-white rounded-md "
                            onClick={handleShow}
                        >
                            Load More
                        </button>
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default App
