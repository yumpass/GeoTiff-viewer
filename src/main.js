import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import GeoTIFF from 'ol/source/GeoTIFF.js';

import 'ol/ol.css';
import './style.css';

const source = new GeoTIFF({
    sources: [
        {
            url: '/orthomosaic.tiff'
        }
    ]
});

const layer = new TileLayer({
    source: source
});

const map = new Map({
    target: 'map',
    layers: [layer]
});

source.getView().then((viewConfig) => {

    console.log('Vista del GeoTIFF:', viewConfig);

    map.setView(
        new View(viewConfig)
    );

}).catch((error) => {

    console.error('Error obteniendo la vista del GeoTIFF:', error);

});