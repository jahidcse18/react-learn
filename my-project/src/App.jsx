
import {useState } from "react";
import UserCard from "./component/userCard.jsx";
import ProductComponent from "./component/ProductComponent.jsx";
function App() {
    const [user,setuser] = useState({name:"test name"});


    const sigupHandler = (event) =>{
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.name.value;

        event.preventDefault();
        const userObject = {
            nameKey:name,
            emailKey: email,
            passwordKey:password,
        }
        console.log(userObject);
        setuser(userObject)

    }

    return (
        <>
            <div className="container mx-auto ">
                <div className="grid grid-cols-2 my-24">
                    <form className="max-w-[450px] mx-auto " onSubmit={sigupHandler}>
                        <label>
                            Name
                            <input name="name" className="block border" type="text"/>
                        </label>
                        <label>
                            Email
                            <input name="email" className="block border" type="email"/>
                        </label>
                        <label>
                            Password
                            <input name="password" className="block border" type="password"/>
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

export default App
