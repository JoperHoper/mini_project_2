"use client"
import EChartsReact from 'echarts-for-react';
import "@/components/CoffeeStats.css"

const CoffeeGraph = () => {
    const coffeeData = [
        { name: "Espresso", value: 400 },
        { name: "Americano", value: 600 },
        { name: "Cappuccino", value: 500 },
        { name: "Latte", value: 800 },
        { name: "Macchiato", value: 200 },
        { name: "Mocha", value: 300 },
        { name: "Flat White", value: 150 },
        { name: "Ristretto", value: 100 },
        { name: "Affogato", value: 50 },
        { name: "Cortado", value: 120 },
        { name: "Lungo", value: 90 },
        { name: "Irish Coffee", value: 40 },
        { name: "Café au Lait", value: 220 },
        { name: "Café Cubano", value: 140 },
        { name: "Frappe", value: 250 },
        { name: "Doppio", value: 180 },
        { name: "Marocchino", value: 100 },
        { name: "Antoccino", value: 80 },
        { name: "Vietnamese Egg Coffee", value: 40 },
        { name: "Flat White", value: 150 },
        { name: "Café Bombón", value: 30 },
        { name: "Café Com Cheirinho", value: 40 },
        { name: "White Coffee", value: 200 },
    ];

    let option;

    option = {
        title: {
            text: "Amount of Coffee Sold Over The World",
            subtext: "Average Daily Sold Count",
            left: "center",
        },
        tooltip: {
            trigger: "item",
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: "50%",
                data: coffeeData,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        ],
    };

    return (
        <div className='eChartContainer'>
            <EChartsReact className='eChartStyle' style={{ height: '600px', width: '100%', paddingTop: "10px" }} option={option} />
        </div>
    )
};

export default CoffeeGraph;