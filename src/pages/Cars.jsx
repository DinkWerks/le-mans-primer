import { useState } from "react";
import CarCard from "../components/CarCard";
import { exampleCar } from "../data/CarData";

const Cars = () => {
    const [sorting, setSorting] = useState("By Make");

    const changeSorting = (e) => {
        if (e.target.checked) {
            setSorting("By Pole");
        }
        else {
            setSorting("By Make");
        }
    }

    function carList() {
        if (sorting === "By Make") {
            return <CarCard car={exampleCar} />
        }
        else {
            return <CarCard car={exampleCar} />;
        }
    }

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-end mb-8">
                <h1 className="text-4xl font-bold">Cars</h1>
                <div className="ml-auto flex items-center">
                    <p className="text-sm font-bold">Sort By Make</p>
                    <input type="checkbox" onChange={changeSorting} className="mx-1 toggle border-2 border-red-500 text-red-500 f bg-white bg-red-500 checked:text-blue-500 checked:border-blue-500"/>
                    <p className="text-sm font-bold">By Pole</p>
                </div>
            </div>

            <div>
                {carList()}
            </div>
        </div>
    );
}

export default Cars;