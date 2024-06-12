
import {useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Accordion from "./component/Accrodion.jsx";
import UserCard from "./component/userCard.jsx";
import ProductComponent from "./component/ProductComponent.jsx";

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
function App_old() {


    const [accrodionValue, setaccrodionValue] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState(accrodionValue);

    const [password,setPassword] = useState(null);
    const [email,setEmail] = useState(null);
    const [name,setName] = useState(null);
    const [user,setuser] = useState({nameKey:"test name"});

    const nameChangeHandler = (event) =>{
        const name = event.target.value;
        // console.log(name);
        setName(name)
    }
    const emailChangeHandler = (event) =>{
        const email = event.target.value;
        // console.log(email);
        setEmail(email)
    }
    const passwordChangeHandler = (event) =>{
        const password = event.target.value;
        // console.log(password);
        setPassword(password)
    }
    // console.log({name,email,password})


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

    const sigupHandler = (event) =>{


        event.preventDefault();
        // if (agree) {
        //
        //     // console.log("Signyp",event);
            const userObject = {
                nameKey:name,
                emailKey: email,
                passwordKey:password,
            }
            console.log(userObject);
            setuser(userObject)
        // }else{
        //     alert("You must nedd to be agree")
        // }
    }

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
                <hr/>
                <div className="grid grid-cols-2 my-24">
                    <form className="max-w-[450px] mx-auto " onSubmit={sigupHandler}>
                        <label>
                            Name
                            <input onChange={nameChangeHandler} className="block border" type="text"/>
                        </label>
                        <label>
                            Email
                            <input onChange={emailChangeHandler} className="block border" type="email"/>
                        </label>
                        <label>
                            Password
                            <input onChange={passwordChangeHandler} className="block border" type="password"/>
                        </label>

                        <button type="submit">Signup</button>
                    </form>
                    <div>
                        <h1>ABC</h1>
                        <UserCard user={user}></UserCard>
                    </div>
                </div>
                <hr/>

                <div className='parent my-24 max-w-[400px] mx-auto border'>
                    <h2>Paret h2 Tag</h2>
                    <ProductComponent>
                        <article>
                            <p>React component child 22</p>
                            <UserCard user={user}></UserCard>
                            <p>React component child 33</p>
                        </article>
                    </ProductComponent>
                </div>


            </div>
        </>
    )
}

export default App_old
