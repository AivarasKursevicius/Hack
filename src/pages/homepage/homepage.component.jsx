import { Card } from '@mui/material';
import React from 'react';
import MapHeat from '../mappage/heatmap.component';
import { data } from '../../data/heatMapData'
import Chart from './chart.component';
import { ReactComponent as Probability } from "../../common/probability.svg"

import './homepage.styles.css';

const cardStyle = {
    margin: '0 50px 0 25px',
    width: '60%',
    height: '60%'
}

const chartStyle = {
    width: '100%',
    height: '100%'
}

const probabilityStyle = {
    margin: '850px 0 0 0'
}


const HomePage = () => {
    const [curCoordinates, setCurCoordinates] = React.useState({ lat: -25.274399, lng: 133.775131 });

    return (
        <div className='homepage'>
            <div className="heatMap">
                <MapHeat data={data} center={curCoordinates} setCurCoordinates={setCurCoordinates} />
                <div style={probabilityStyle}>
                    <Probability />
                </div>
            </div>
            <Card variant="outlined" style={cardStyle}>
                <h2>Selected coordinates</h2>
                <p>{curCoordinates.lat}, {curCoordinates.lng}</p>
                <div style={chartStyle}>
                    <Chart coordinates={curCoordinates} />
                </div>
            </Card>
        </div>
    )
}

export default HomePage;