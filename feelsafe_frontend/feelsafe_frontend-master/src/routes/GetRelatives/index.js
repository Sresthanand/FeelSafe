import React,{useState} from "react";
import {useHistory} from 'react-router-dom';
import MAP_DARK from "../../assets/images/map_dark.svg";
import Input from "../../components/shared/Input";
import Button from "../../components/shared/Button";
import {url} from '../../config';
import {getLocalStorageTokens} from '../../utils/localStorage';
import './styles.css';

export default function GetRelatives() {
    const history=useHistory();
    const [nameOne,setNameOne]=useState('');
    const [nameTwo,setNameTwo]=useState('');
    const [nameThree,setNameThree]=useState('');
    const [relationshipOne,setRelationshipOne]=useState('');
    const [relationshipTwo,setRelationshipTwo]=useState('');
    const [relationshipThree,setRelationshipThree]=useState('');
    const [phoneOne,setPhoneOne]=useState('');
    const [phoneTwo,setPhoneTwo]=useState('');
    const [phoneThree,setPhoneThree]=useState('');
    const handleSubmit=async () => {
        const currTokens=await getLocalStorageTokens();
        const accessToken=currTokens.accessToken;
        const setTrustedResponse=await fetch(`${url}/emergency-contacts`,{
            method: "POST",headers: {"Content-Type": "application/json"},body: JSON.stringify({
                accessToken,
                emergency_contacts: [{name: nameOne,relation: relationshipOne,phone: phoneOne},{name: nameTwo,relation: relationshipTwo,phone: phoneTwo},{name: nameThree,relation: relationshipThree,phone: phoneThree}]
            })
        });
        const formattedResponse=await setTrustedResponse.json();
        console.log('EMERGENCY CONTACT UPDATED | ',formattedResponse);
        history.push('/home');
    }
    return (
        <div className="mainRegister">
            <div className="absolute innerDiv">
                <div className="w-1/3 float-left text-center imageDiv">
                    <img src={MAP_DARK} alt="side-image" className="" />
                </div>
                <div className="w-2/3 float-left formDiv border-2 border-solid border-black rounded-md">
                    <h1 className="text-4xl font-semibold">
                        Sign Up For An Account
                    </h1>
                    <h3 className="text-xl">
                        Enter Trusted People Details
                    </h3>
                    <div className="trustedPerson">
                        <div className="input">
                            <Input
                                type="text"
                                placeholder="Trusted Person 1 Name"
                                value={nameOne}
                                onChange={(e) => {setNameOne(e.target.value)}}
                            />
                        </div>
                        <div className="input">
                            <Input
                                type="text"
                                placeholder="Trusted Person 1 Relation"
                                value={relationshipOne}
                                onChange={(e) => {setRelationshipOne(e.target.value)}}
                            />
                        </div>
                        <div className="input">
                            <Input
                                type="number"
                                placeholder="Trusted Person 1 Phone"
                                value={phoneOne}
                                onChange={(e) => {setPhoneOne(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="trustedPerson">
                        <div className="input">
                            <Input
                                type="text"
                                placeholder="Trusted Person 2 Name"
                                value={nameTwo}
                                onChange={(e) => {setNameTwo(e.target.value)}}
                            />
                        </div>
                        <div className="input">
                            <Input
                                type="text"
                                placeholder="Trusted Person 2 Relation"
                                value={relationshipTwo}
                                onChange={(e) => {setRelationshipTwo(e.target.value)}}
                            />
                        </div>
                        <div className="input">
                            <Input
                                type="number"
                                placeholder="Trusted Person 2 Phone"
                                value={phoneTwo}
                                onChange={(e) => {setPhoneTwo(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="trustedPerson">
                        <div className="input">
                            <Input
                                type="text"
                                placeholder="Trusted Person 3 Name"
                                value={nameThree}
                                onChange={(e) => {setNameThree(e.target.value)}}
                            />
                        </div>
                        <div className="input">
                            <Input
                                type="text"
                                placeholder="Trusted Person 3 Relation"
                                value={relationshipThree}
                                onChange={(e) => {setRelationshipThree(e.target.value)}}
                            />
                        </div>
                        <div className="input">
                            <Input
                                type="number"
                                placeholder="Trusted Person 3 Phone"
                                value={phoneThree}
                                onChange={(e) => {setPhoneThree(e.target.value)}}
                            />
                        </div>
                    </div>
                    <div className="submitButton">
                        <Button
                            text="Finish"
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
