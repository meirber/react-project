import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


type Vacation = {
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
    id: string;
};

export default function TripDetail() {
    const [trip, setTrip] = useState<Vacation | null>(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchTrip = async () => {
            try {
                const respons = await fetch(`http://localhost:3000/api/trips/${id}`, { method: "GET" });
                const tripData = await respons.json();
                setTrip(tripData)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchTrip()
    }, [id])




    return (
        <div className="trip-detail-container">
            <div><h1>TripDetail</h1></div>
            <Link to="/trips" ><button>Trips</button></Link>

            {trip && (
                <div className='trip-detail-card' >
                    <div>{trip.name}</div>
                    <img src={trip.image} alt="img" width={"300px"} />
                    <div>start: {trip.startDate}</div>
                    <div>end: {trip.endDate}</div>
                    <div>{trip.destination}</div>
                    <div>{trip.description}</div>
                    <div>{trip.price}</div>
                    <div>{trip.activities}</div>
                </div>
            )}
        </div>
    )
}
