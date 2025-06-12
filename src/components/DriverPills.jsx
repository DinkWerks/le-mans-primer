import React from 'react'

export default function DriverPills({ driver }) {
    function getFIARating(){
        let rating;
        let color;
        switch (driver.rating) {
            case 0:
                rating = "Platinum";
                color = "bg-green-600";
                break;
            case 1:
                rating = "Gold";
                color = "bg-yellow-600";
                break;
            case 2:
                rating = "Silver";
                color = "bg-slate-600";
                break;
            case 3:
                rating = "Bronze";
                color = "bg-orange-600";
                break;
            default:
                rating = "error";
                color = "bg-black-600";
                break;
        }
        return <div>{rating}</div>
    }

    return (
        <div className='flex text-sm items-center'>
            <div>F</div>
            <p>{driver.name}</p>
            {getFIARating()}
        </div>
    )
}
