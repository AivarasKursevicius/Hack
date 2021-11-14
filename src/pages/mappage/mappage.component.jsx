import React from 'react';
import {data} from '../../data/heatMapData'
import MapHeat from './heatmap.component';
import './mappage.styles.css';

const MapPage = () => (
    <div className='mappage'>
        <MapHeat data={data} center={{ lat: -25.274399, lng: 133.775131 }} />;
    </div>
);

export default MapPage;