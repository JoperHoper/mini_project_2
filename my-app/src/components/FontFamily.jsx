"use client"
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const montserrat = Montserrat({
    weight: "400",
    subsets: ["cyrillic"],
})

export const theme = createTheme({
    typography: {
        fontFamily: montserrat.style.fontFamily
    },
});

