import React from 'react'

export default function DriverPills({ driver }) {
    function getFIARating(){
        let rating;
        let color;
        switch (driver.rating) {
            case 0:
                rating = "Platinum";
                color = "bg-base-300 ring ring-slate-400";
                break;
            case 1:
                rating = "Gold";
                color = "bg-yellow-400";
                break;
            case 2:
                rating = "Silver";
                color = "bg-slate-400";
                break;
            case 3:
                rating = "Bronze";
                color = "bg-yellow-600";
                break;
            default:
                rating = "error";
                color = "bg-neutral-800";
                break;
        }
        return <div className={'h-3 w-3 rounded-full tooltip ' + color} data-tip={rating}/>
    }

    return (
        <div className='badge badge-sm badge-neutral badge-outline'>
            <div className="tooltip" data-tip="Italy">
                <span className={'h-3 flag-icon flag-icon-' + driver.countryCode}/>
            </div>
            <p>{driver.name}</p>
            {getFIARating()}
        </div>
    )
}
