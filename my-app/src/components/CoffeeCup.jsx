import "@/components/CoffeeAnimation.css"

const CoffeeCup = () => {
    return (
        <span className="animationContainer">
            <div className="animationWrapper">
                <div className="cup">
                    <span className="steam"></span>
                    <span className="steam"></span>
                    <span className="steam"></span>
                    <div className="cupHandle"></div>
                </div>
            </div>
        </span>
    )
}

export default CoffeeCup;