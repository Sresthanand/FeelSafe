import React,{useState} from "react";
import MAP_DARK from "../../assets/images/map_dark.svg";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import {url} from '../../config';
import {setLocalStorageTokens} from '../../utils/localStorage';
import {useHistory} from 'react-router-dom';
import './styles.css'

export default function Login() {
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const history=useHistory();
    const handleSubmit=async () => {
        const loginResponse=await fetch(`${url}/login`,{
            method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({
                phoneNumber: phone,password
            })
        });
        const formattedResponse=await loginResponse.json();
        await setLocalStorageTokens({accessToken: formattedResponse.aadharHash});
        history.push('/');
    }

    return (
        <div className="mainLogin">
            <div className="absolute innerLoginDiv">
                <div className="w-1/3 float-left text-center imageDiv">
                    <img src={MAP_DARK} alt="side-image" className="" />
                </div>
                <div className="w-2/3 float-left formDiv border-2 border-solid border-black rounded-md">
                    <h1 className="text-4xl font-semibold">
                        Login to your account
                    </h1>
                    <div className="inputDiv">
                        <Input
                            type="number"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) => {setPhone(e.target.value)}}
                        />
                    </div>
                    <div className="inputDiv">
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <div className="inputDiv">
                        <Button
                            text="Login"
                            backgroundColor="#F42323"
                            textColor="#FFF"
                            onClick={handleSubmit}
                        />
                    </div>
                    <a href="/register">Sign Up Instead</a>
                </div>
            </div>
        </div>
    );
}
