import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'



type Vacation = {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
};

export default function Trips() {
    const [allTrips, setTrips] = useState<Vacation[]>([])

    useEffect(() => {
        const trips = async () => { return await fetch("http://localhost:3000/api/trips", { method: "GET" }) };
        trips()
            .then((data) => data.json())
            .then((trips) => {
                console.log(trips);
                
                setTrips(trips)})
    }, [])


    const deleteTrip = async (e: React.MouseEvent, prop: Vacation) => {
        e.preventDefault();
        try {
             await fetch(`http://localhost:3000/api/trips/${prop.id}`, {
                method: "DELETE",
                headers: {"authorization": "test-token"}
            });
            const updatedTrips = allTrips.filter((trip) => trip.id !== prop.id);
            setTrips(updatedTrips);
        } catch (error) {
            console.error("Error deleting trip:", error);
        }
    };


    return (
       <div className="trips-container">
            <div><h1>Trips</h1></div>
            <Link to="/" ><button>Home</button></Link>
            <Link to="/newTrip" ><button>NewTrip</button></Link>

            <div className="trip-container">
                {allTrips.map((prop: Vacation, index) =>
                    <div key={index} className='trip-detail-card'>
                        <Link to={`/tripDetail/${prop.id}`} ><div style={{ border: "solid" }}>
                            <div> {prop.name}</div>
                            <img src={prop.image} alt="img" width={"300px"} />
                            <div>{prop.endDate}</div>
                            <div>{prop.destination}</div>
                            <div>{prop.startDate}</div>
                            <div><button onClick={(e) => deleteTrip(e, prop)}>Delete</button></div>
                        </div></Link>
                    </div>
                )}
            </div>
        </div>
    )
}