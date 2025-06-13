import React from 'react'
import DriverPills from './DriverPills'
import CarModal from './CarModal'

export default function CarCard({ car }) {
    function getElectricalBadge() {
        if (car.engine.electrical) {
            return (
                <div className='flex ml-1'>
                    <p>+</p>
                    <div className='ml-1 badge badge-sm badge-warning tooltip' data-tip="This car also has an electrical motor providing power.">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 10 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                        </svg>
                        {car.engine.electrical.powerKw}
                    </div>
                </div>
            )
        }
    }

    function getEntryType() {
        if (car.team.isFactoryTeam) {
            return (
                <div className='flex items-center font-bold text-white bg-green-600 tooltip tooltip-right'
                    data-tip="This car is owned and supported by the manufacturer.">
                    <p className='[writing-mode:sideways-lr] font-[Helvetica]'>FACTORY</p>
                </div>
            )
        }
        return <div className='flex items-center text-center font-bold text-white bg-orange-600 tooltip tooltip-right' 
                    data-tip="This car owned by a private team is not directly supported by the manufacturer.">
                    <p className='[writing-mode:sideways-lr] font-[Helvetica]'>PRIVATEER</p>
                </div>
    }

    function openDetails(){
        document.getElementById("car-details-" + car.number).showModal()
    }

    return (
        <div className='flex border bg-base-200 shadow-lg w-[350px]' onClick={() => openDetails()}>
            {getEntryType()}
            <div>
                <div className='flex'>
                    <div className='ml-4'>
                        <div className='flex items-center tooltip tooltip-left' data-tip={car.team.country}>
                            <span className='mt-1 h-3 flag-icon flag-icon-it' />
                            <h1 className='text-xl font-bold ml-2'>{car.team.name}</h1>
                        </div>
                        <div className='flex items-center tooltip tooltip-left' data-tip={car.maker.country} data-tip-location='start'>
                            <span className='h-3 flag-icon flag-icon-it' data-tip={car.maker.country} />
                            <h1 className='text-sm font-semibold ml-2'>{car.maker.name} {car.name}</h1>
                        </div>
                    </div>
                    <h1 className='text-xl font-bold bg-base-300 ml-auto py-2 px-4 ring'>{car.number}</h1>
                </div>
                <img src={car.image} className='mx-4 mb-4 w-[300px]' alt={`Number ${car.number} ${car.maker.name}`} />
                <div className='px-4 grid grid-cols-[auto_1fr] items-center gap-y-1 gap-x-2 mb-2'>
                    <label className='text-sm font-bold'>Engine:</label>
                    <p className='text-sm'>{car.engine.manufacturer} {car.engine.name}</p>
                    <label className='text-sm font-bold'>Config:</label>
                    <div className='text-sm flex'>{car.engine.layout} {car.engine.displacement} {getElectricalBadge()}</div>
                    <label className='text-sm font-bold'>Chassis:</label>
                    <p className='text-sm'>{car.chassisManufacturer}</p>
                </div>
                <div className='pb-4 px-4 flex flex-wrap gap-1'>
                    {car.drivers.map((driver) => (
                        <DriverPills driver={driver} />
                    ))}
                </div>
            </div>
            <CarModal car={car}/>
        </div>
    )
}
