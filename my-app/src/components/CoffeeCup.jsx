import CoffeeAnimation from "./CoffeeAnimation.module.css"

const CoffeeCup = () => {
    return (
        <span className={CoffeeAnimation.animationContainer}>
            <div className={CoffeeAnimation.animationWrapper}>
                <div className={CoffeeAnimation.cup}>
                    <span className={CoffeeAnimation.steam}></span>
                    <span className={CoffeeAnimation.steam}></span>
                    <span className={CoffeeAnimation.steam}></span>
                    <div className={CoffeeAnimation.cupHandle}></div>
                </div>
            </div>
        </span>
    )
}

export default CoffeeCup;