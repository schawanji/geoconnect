import React, { useRef, useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import { GeoJSON } from 'ol/format';
import { createXYZ } from 'ol/tilegrid';

const OpenLayersMap = () => {
  const mapRef = useRef();

  useEffect(() => {
    const projection = 'EPSG:4326';

    // Match the server resolutions
    const tileGrid = createXYZ({
      extent: [-180, -90, 180, 90],
      tileSize: 512,
      maxResolution: 180 / 512,
      maxZoom: 4,
    });
    const map = new Map({
      target: mapRef.current,
      layers: [
        new VectorTileLayer({
          source: new VectorTileSource({
            format: new GeoJSON(),
            projection: projection,
            tileGrid, tileGrid,
            url: 'http://localhost:8081/geoserver/gwc/service/tms/1.0.0/ne:world@EPSG:4326@geojson/{z}/{x}/{-y}.geojson',
            maxZoom: 19,
          }),
        }),
      ],
      view: new View({
        projection: projection,
        center: [51, 13],
        zoom: 2,                 // Initial map zoom level
        minZoom: 0,              // Minimum zoom level
        maxZoom: 13,             // Maximum zoom level
      }),
    });

    // Clean up on component unmount
    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '90vh' }} />;
};

export default OpenLayersMap;
