import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


type Vacation = {
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    image: string;
    price: string;
    description: string;
    activities: string;

};

export default function NewTripForm() {
    const { register, handleSubmit } = useForm<Vacation>();
    const handleRegistration = async (data: Vacation) => {
        console.log("data",data);

        const myHeaders = new Headers();
        myHeaders.append("authorization", "test-token");
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify(data);
        
        const requestOptions:RequestInit = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:3000/api/trips", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    };
    return (
        <div className="new-trip-form-container">
            <div><h1>NewTripForm</h1></div>
            <Link to="/trips" ><button>Trips</button></Link>
            <form onSubmit={handleSubmit(handleRegistration)} className='new-trip-form'>
                <div>
                    <label>Name</label>
                    <input  {...register('name')} />
                </div>
                <div>
                    <label>destination</label>
                    <input {...register('destination')} />
                </div>
                <div>
                    <label>startDate</label>
                    <input {...register('startDate')} />
                </div>
                <div>
                    <label>endDate</label>
                    <input {...register('endDate')} />
                </div>
                <div>
                    <label>description</label>
                    <input {...register('description')} />
                </div>
                <div>
                    <label>price</label>
                    <input {...register('price')} />
                </div>
                <div>
                    <label>image</label>
                    <input {...register('image')} />
                </div>
                <div>
                    <label>activities</label>
                    <input {...register('activities')} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
