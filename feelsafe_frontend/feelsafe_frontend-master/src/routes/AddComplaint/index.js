import React from 'react';
import COMPLAINT from '../../assets/images/complaint.svg';
import Input from '../../components/shared/Input';
import Navbar from '../../components/shared/Navbar';
import Button from '../../components/shared/Button';

function AddComplaint() {
    return (
        <div className="mainAddComplaint">
            <Navbar/>
            <div className="w-1/3 p-6 float-left">
                <img
                    src={COMPLAINT}
                    className="mt-24"
                />
            </div>
            <div className="w-2/3 float-left p-24 text-2xl font-bold">
                <h1>Add A Complaint</h1>
                <div className="h-16 mt-6">
                    <Input
                        type="text"
                        placeholder="Enter Description"
                    />
                </div>
                <div className="mt-6">
                    <Button
                        text="Submit"
                        backgroundColor="black"
                        textColor="white"
                    />
                </div>
            </div>
        </div>
    )
}

export default AddComplaint;