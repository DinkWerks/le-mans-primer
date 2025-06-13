export default function CarModal({ car }) {
    return (
        <dialog id={"car-details-" + car.number} className="modal">
            <div className='modal-box'>
                <div className="flex">
                    <div>
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

                <div className="divider" />
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}