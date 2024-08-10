"use client"
import { useState } from "react";
import ActionAreaCard from "@/components/ActionAreaCard";
import { useCoffeeContext } from "@/context/CoffeeContext";
import "../../components/FeelingCoffee.css";
import 'animate.css';
import { Typography } from "@mui/material";

const CoffeeRandomizer = () => {
    const { coffeeResult, getDataByCoffeeType, coffeeTypeMap } = useCoffeeContext();
    const [randomIndex, setRandomIndex] = useState(0)
    const [animationClass, setAnimationClass] = useState("")

    const getRandomCoffee = () => {
        setAnimationClass("")
        setRandomIndex(Math.floor(Math.random() * coffeeResult.coffeeArr.length));
        setTimeout(() => {
            setAnimationClass("animate__animated animate__tada");
        }, 50);
    }

    const coffeeDisplayHandler = () => {
        if (coffeeResult.loading) {
            return <p>Loading...</p>;
        }
        if (coffeeResult.coffeeArr[randomIndex]) {
            return (
                <div className={animationClass}>
                    <ActionAreaCard value={{
                        coffeeImgURL: coffeeResult.coffeeArr[randomIndex].image,
                        coffeeTitle: coffeeResult.coffeeArr[randomIndex].title,
                        coffeeDesc: coffeeResult.coffeeArr[randomIndex].description
                    }}
                    />
                </div>
            )
        }
        return (
            <></>
        )
    }

    return (
        <div className="displayContainer">
            <div className="displayCard">{coffeeDisplayHandler()}</div>
            <div className="btnContainer">
                <button className="gachaCoffeeBtn" onClick={getRandomCoffee}><Typography>I'm Feelin' Coffee</Typography></button>
            </div>
        </div>
    );
};

export default CoffeeRandomizer;