import AccountComponent from "../components/AccountComponent";
import { useState, useEffect } from 'react';
import { updateUser, getUser } from '../services/index';
import { useSelector } from 'react-redux'
import { selectToken } from '../features/userToken'
import { useNavigate } from "react-router-dom";



function Account() {
    const [isOnUpdateUser, setIsOnUpdateUser] = useState(false);
    const [userFirstName, setUserFirstName] = useState();
    const [userName, setUserName] = useState();
    const navigate = useNavigate();
    const user_token = useSelector(selectToken);



    useEffect(() => {
        if (!user_token) {
            navigate('/login');
        }

        getUser(user_token).then((response) => {
            setUserFirstName(response.data.body.firstName);
            setUserName(response.data.body.lastName);
        });

    }, []);

    function setUpdateUser() {
        setIsOnUpdateUser(true)
    }

    function setNotUpdateUser() {
        setIsOnUpdateUser(false)
    }

    async function saveUserData(e) {
        e.preventDefault();
        await updateUser(userFirstName, userName, user_token).then((response) => {
            return response.data;
        });
    }

    function handleChangeFirstName(e) {
        setUserFirstName(e.target.value);
    }

    function handleChangeName(e) {
        setUserName(e.target.value);
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userFirstName && userFirstName} {userName && userName}!</h1>
                {isOnUpdateUser ?
                    <form className="userForm">
                        <div>
                            <input type="text" placeholder="Tony" onChange={handleChangeFirstName} value={userFirstName} />
                            <input type="text" placeholder="Jarvis" onChange={handleChangeName} value={userName} />
                        </div>
                        <div>
                            <button onClick={saveUserData}>Save</button>
                            <button onClick={setNotUpdateUser}>Cancel</button>
                        </div>
                    </form>
                    :
                    <button className="edit-button" onClick={setUpdateUser}>Edit Name</button>
                }
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountComponent title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
            <AccountComponent title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
            <AccountComponent title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
        </main>
    )
}
export default Account;