import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css'

// Fix for missing marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
    iconUrl:
        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    shadowUrl:
        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});



function User() {
    let [data, setData] = useState([]);
    let [error, setError] = useState(null);
    useEffect(() => {
        let getUserInfo = async () => {
            try {
                await fetch("https://fakestoreapi.com/users")
                    .then((response) => response.json())
                    .then((data) => setData(data));
                //.catch((err) => setError(err));
            }
            catch (err) {
                setError(err);
            }
        }
        getUserInfo();
    }, [])

    if (error) return <div>Error : {error.message}</div>;
    return (
        <>
            <div>User Data</div>
            {data.map((item) => (
                <div className="container">
                    <div className="input-box">
                        <span>User Id : {item.id}</span>
                    </div>
                    <div className="input-box">
                        <span>User Name : {item.username}</span>
                    </div>
                    <div className="input-box">
                        <span> Name : {item.name.firstname} {item.name.lasttname}</span>
                    </div>
                    <div className="input-box">
                        <span>Email Id : {item.email}</span>
                    </div>
                    <div className="input-box">
                        <span> Phone : {item.phone}</span>
                    </div>
                    <div className="address-map-container">
                        <div className="address-fields">
                            <div className="input-box">
                                <span>City : {item.address.city}</span>
                            </div>
                            <div className="input-box">
                                <span>Street Name : {item.address.street}</span>
                            </div>
                            <div className="input-box">
                                <span>Street Number : {item.address.number}</span>
                            </div>
                            <div className="input-box">
                                <span>Zip Code : {item.address.zipcode}</span>
                            </div>
                        </div>
                        <div className="map-box">
                            <MapContainer center={[item.address.geolocation.lat, item.address.geolocation.long]} zoom={5} style={{ height: "100%", width: "100%" }}>
                                <TileLayer
                                    attribution='&copy; OpenStreetMap contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[item.address.geolocation.lat, item.address.geolocation.long]}>
                                    <Popup>{item.city}</Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default User;