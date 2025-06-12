import CarCard from "../components/CarCard";
import Ferrari50 from "../assets/Ferrari50.png";

const Cars = () => {
    const exampleCar = {
        class: "LMH",
        make: "Ferrari",
        name: "449P",
        number: "50",
        engine: {
            manufacturer: "Ferrari",
            name: "Tipo F163",
            displacement: "2,992 cc",
            layout: "V6",
            electrical: {
                powerKw: "200 kW",
                powerHp: "268 hp",
                manufacturer: "Ferrari"
            }
        },
        team: {
            name: "AF Corse",
            country: "Italy",
            isFactoryTeam: true
        },
        chassisManufacturer: "Dallara",
        image: Ferrari50
    }

    return (
        <div>
            <h1>Cars</h1>
            <CarCard car={exampleCar} />
        </div>
    );
}

export default Cars;