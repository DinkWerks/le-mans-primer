import { useState } from "react";
import { hypercarQuestions, raceQuestions } from "../data/AboutData";
import Question from "../components/Question";

function About() {
    const [selectedCategory, setSelectedCategory] = useState("Race");
    const [questions, setQuestions] = useState(raceQuestions);

    function changeCategory(newCategory){
        setSelectedCategory(newCategory);
        switch(newCategory){
            case "Race":
                setQuestions(raceQuestions);
                break;
            case "Hypercars":
                setQuestions(hypercarQuestions);
                break;
            default:
                setQuestions(raceQuestions);
                break;
        }
    }

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center mt-4 mb-4">
                <div>
                    <h3 className="text-2xl font-bold">About Le Mans:</h3>
                    <h4 className="text-lg font-bold">The {selectedCategory}</h4>
                </div>
                <ul className="ml-auto menu menu-horizontal join bg-white">
                    <li><button className="btn btn-sm btn-outline border-red-400 join-item" onClick={() => changeCategory("Race")}>Race</button></li>
                    <li><button className="btn btn-sm btn-outline border-red-400 join-item" onClick={() => changeCategory("Hypercars")}>Hypercars</button></li>
                    <li><button className="btn btn-sm btn-outline border-red-400 join-item" onClick={() => changeCategory("LMP2s")}>LMP2s</button></li>
                    <li><button className="btn btn-sm btn-outline border-red-400 join-item" onClick={() => changeCategory("GT3s")}>GT3s</button></li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                {questions.map(q => <Question faq={q}/>)}
            </div>
        </div>
    );
}

export default About;