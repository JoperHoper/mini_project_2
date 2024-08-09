"use client"
import React, { createContext, useContext, useReducer, useEffect, useState } from "react";

const CoffeeContext = createContext();

const CoffeeProvider = (props) => {
    const [coffeeType, setCoffeeType] = useState("all");
    const coffeeTypeMap = { HOT: "hot", ICED: "iced", ALL: "all" }

    const [coffeeResult, dispatch] = useReducer(reducer, { // initial state for postsResult state variable
        loading: true, // true when loading and no data in posts
        coffeeArr: [], // empty until data is fetched
        error: '' // empty unless there was an error
    })

    useEffect(() => {
        if (coffeeType == coffeeTypeMap.HOT || coffeeType == coffeeTypeMap.ICED) {
            fetch(`https://api.sampleapis.com/coffee/${coffeeType}`)
                .then(response => response.json())
                .then((coffeeData) => {
                    dispatch({ type: "FETCH_SUCCESS", payload: [...coffeeData] }) // dispatch calls reducer function and triggers re-render
                })
                .catch(error => {
                    dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
                })
        }
        else {
            fetch(`https://api.sampleapis.com/coffee/hot`)
                .then(response => response.json())
                .then((hotData) => {
                    fetch(`https://api.sampleapis.com/coffee/iced`)
                        .then(response => response.json())
                        .then(coldData => {
                            // combine them
                            dispatch({ type: "FETCH_SUCCESS", payload: [...hotData, ...coldData] }) // dispatch calls reducer function and triggers re-render
                        })
                        .catch(error => {
                            dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
                        })
                })
                .catch(error => {
                    dispatch({ type: "FETCH_ERROR", payload: error.message }) // lets us handle different types of state changes differently
                })
        }
        return () => {
            dispatch({ type: "FETCH_SUCCESS", payload: [] })
        };
    }, [coffeeType]);

    const getDataByCoffeeType = (filter) => {
        setCoffeeType(filter)
    }

    return (
        <CoffeeContext.Provider value={{ coffeeResult, getDataByCoffeeType, coffeeTypeMap }}>
            {props.children}
        </CoffeeContext.Provider>
    );
}

export default CoffeeProvider;

function reducer(coffeeResult, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { loading: false, coffeeArr: action.payload, error: '' }
        case 'FETCH_ERROR':
            return { loading: false, coffeeArr: [], error: action.payload }
        default:
            return { ...coffeeResult, loading: false }
    }
}

export const useCoffeeContext = () => {
    return useContext(CoffeeContext);
}

