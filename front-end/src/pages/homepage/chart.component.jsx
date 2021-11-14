import React from 'react';
import { FunnelChart, Funnel, LabelList, Tooltip } from 'recharts';
import { data } from '../../data/chartData'

const divStyle = {
    width: "100%",
    height: "100%"
}

const chartWrapperStyle = {
    width: "100%",
    height: "100%",
    margin: '0 0 0 100px'
}

const headlineStyle = {
    margin: '10px 150px 0 0'
}

const pStyle = {
    margin: '10px 150px 0 0',
    color: "#a84832",
}

const Chart = (props) => {

    const filteredData = data.filter((item) => item.coordinates.find((coordinate) => ((coordinate.lat > (props.coordinates.lat - 1)) && (coordinate.lat < (props.coordinates.lat + 1)) && (coordinate.lng > (props.coordinates.lng - 1)) && (coordinate.lng < (props.coordinates.lng + 1)))));

    const valueTotal = filteredData.reduce((totalValue, item) => 
    totalValue + (item.name === "Wind m/s" ? item.value * 0.3 : 
    item.name === "Temperature °C" ? item.value * 2 * 0.4 : 
    item.name === "Garbage reports" ? item.value * 0.2 :
    item.name === "Humidity %" ? item.value / 4 * 0.1 :
    item.value), 0);

    return (
        <div style={divStyle}>
            {filteredData.length > 0 ?
                 <div style={chartWrapperStyle}>
                    <p style={pStyle}>Possibility of fire {Math.round(valueTotal)}%</p>
                    <h3 style ={headlineStyle}>We predict Fire based on these parameters</h3>
                    <FunnelChart width={380} height={250}>
                        <Tooltip />
                        <Funnel
                            dataKey="value"
                            data={filteredData}
                            isAnimationActive
                        >
                            <LabelList position="right" fill="#000" stroke="none" dataKey="name" />
                        </Funnel>
                    </FunnelChart>
                </div>
                : 'No data Found'}
        </div>
    );
}

export default Chart;
