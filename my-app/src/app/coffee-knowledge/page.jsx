"use client"
import ActionAreaCard from "@/components/ActionAreaCard";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import DropdownMenu from "@/components/DropdownMenu";
import { useCoffeeContext } from "@/context/CoffeeContext";

const CoffeeKnowledge = () => {
    const { coffeeResult, getDataByCoffeeType, coffeeTypeMap } = useCoffeeContext();

    const coffeeDisplayHandler = () => {
        if (coffeeResult.loading) {
            return <p>Loading...</p>;
        }
        return coffeeResult.coffeeArr.map((coffee) => {
            return (
                <Grid>
                    <ActionAreaCard value={{ coffeeImgURL: coffee.image, coffeeTitle: coffee.title, coffeeDesc: coffee.description }} />
                </Grid>
            )

        })
    }

    return (
        <div>
            <span style={{ display: "flex", margin: "8px", justifyContent: "right" }}><DropdownMenu value={{ getDataByCoffeeType, coffeeTypeMap }} /></span>
            <Grid sx={{ justifyContent: "center", padding: "15px 0px" }} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {coffeeDisplayHandler()}
            </Grid>
        </div>
    )
}

export default CoffeeKnowledge;