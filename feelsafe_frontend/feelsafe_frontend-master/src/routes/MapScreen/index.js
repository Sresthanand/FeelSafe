import React from 'react';
import Map from '../../components/Map';
import Navbar from '../../components/shared/Navbar';
import Button from '../../components/shared/Button';
import './styles.css';

function MapScreen() {
    return (
        <div className="mainMapScreen absolute">
            <Navbar />
            <div className="mainInnerMapScreen">
                <div className="h-full w-11/12">
                    <Map />
                    <div className="break"/>
                    <Button
                        text="SOS"
                        backgroundColor="red"
                        textColor="white"
                    />
                </div>
            </div>
        </div>
    )
}

export default MapScreen;
