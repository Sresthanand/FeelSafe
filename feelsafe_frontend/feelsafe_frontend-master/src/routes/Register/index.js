import React,{useState} from "react";
import {useHistory} from 'react-router-dom';
import {url} from '../../config';
import {setLocalStorageTokens} from '../../utils/localStorage';
import MAP_DARK from "../../assets/images/map_dark.svg";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import './styles.css';

export default function Register() {
    const [phone,setPhone]=useState('');
    const [password,setPassword]=useState('');
    const aadhar='808090909090';
    const history=useHistory();
    const handleSubmit=async () => {
        const registerResponse=await fetch(`${url}/register`,{
            method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({
                phoneNumber: phone,password,aadhar
            })
        });
        const formattedResponse=await registerResponse.json();
        await setLocalStorageTokens({accessToken: formattedResponse.aadharHash});
        history.push('/get-relatives');
    }
    return (
        <div className="mainRegister">
            <div className="absolute innerRegisterDiv">
                <div className="w-1/3 float-left text-center imageDiv">
                    <img src={MAP_DARK} alt="side-image" className="" />
                </div>
                <div className="w-2/3 float-left formDiv border-2 border-solid border-black rounded-md">
                    <h1 className="text-4xl font-semibold">
                        Sign Up For An Account
                    </h1>
                    <h3 className="text-xl">
                        Enter Account Details
                    </h3>
                    <div className="inputDiv">
                        <Input
                            type="number"
                            placeholder="Enter Phone Number"
                            value={phone}
                            onChange={(e) => {setPhone(e.target.value);}}
                        />
                    </div>
                    <div className="inputDiv">
                        <Input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value);}}
                        />
                    </div>
                    <div className="inputDiv">
                        <Button
                            text="Next"
                            backgroundColor="#F42323"
                            textColor="#FFF"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
