import Ferrari50 from "../assets/Ferrari50.png";

export const exampleCar = {
    class: "LMH",
    maker: {
        name: "Ferrari",
        country: "Italy",
        countryCode: "it"
    },
    name: "449P",
    number: "50",
    qualyPosition: 1,
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
    chassisManufacturer: "Dallara",
    image: Ferrari50,
    team: {
        name: "Ferrari AF Corse",
        country: "Italy",
        countryCode: "it",
        isFactoryTeam: true
    },
    drivers: [
        {
            name: "Antonio Fuoco",
            county: "Italian",
            countryCode: "it",
            rating: 0,
            isF1: false,
            isMotoGP: false
        },{
            name: "Miguel Molina",
            county: "Spanish",
            countryCode: "es",
            rating: 0,
            isF1: false,
            isMotoGP: false
        },{
            name: "Nicklas Nielsen",
            county: "Denmark",
            countryCode: "dk",
            rating: 0,
            isF1: false,
            isMotoGP: false
        },
    ]
}