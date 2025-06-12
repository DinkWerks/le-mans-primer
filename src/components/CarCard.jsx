import React from 'react'

export default function CarCard({car}) {
    return ( 
        <div className='flex flex-col border bg-base-200 shadow-lg max-w-[300px]'>
            <div className='flex'>
                <div className='flex items-center ml-4 pr-4 py-2'>
                    <span className='mt-1 h-3 flag-icon flag-icon-it'/>
                    <h1 className='text-2xl font-bold ml-2'>{car.make} {car.name}</h1>
                </div>
                <h1 className='text-xl font-bold bg-base-300 ml-auto py-2 px-4 ring'>{car.number}</h1>
            </div>
            <img src={car.image} className='mx-4 mb-4' alt={`Number ${car.number} ${car.make}`} />
        </div>
    )
}
