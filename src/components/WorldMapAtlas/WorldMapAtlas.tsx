import React, { useState, useEffect, useContext } from 'react';
import { geoEqualEarth, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { Feature, FeatureCollection, Geometry } from 'geojson';
import MyContext from '../../context/context';
import { setCurrentLaunch } from '../../actions/action';
// import './WorldMap.scss';

const scale: number = 200
const cx: number = 400
const cy: number = 150

const WorldMapAtlas = () => {
    const { state, dispatch } = useContext(MyContext);
    const projection = geoEqualEarth().scale(scale).translate([cx, cy]).rotate([0, 0]);
    const [geographies, setGeographies] = useState<[] | Array<Feature<Geometry | null>>>([]);

    useEffect(() => {
        fetch('/data/world-110m.json').then((response) => {
            if (response.status !== 200) {
                console.log(`Houston we have a problem: ${response.status}`)
                return
            }
            response.json().then((worldData) => {
                const mapFeatures: Array<Feature<Geometry | null>> = ((feature(worldData, worldData.objects.countries) as unknown) as FeatureCollection).features
                setGeographies(mapFeatures)
            })
        })
    }, []);

    const data: { name: string; coordinates: [number, number] }[] = [
        { name: '1', coordinates: [-73.9919, 40.7529] },
        { name: '2', coordinates: [-70.0007884457405, 40.75509010847814] },
    ];

    const returnProjectionValueWhenValid = (point: [number, number], index: number) => {
        const retVal: [number, number] | null = projection(point)
        if (retVal?.length) {
            return retVal[index]
        }
        return 0
    };

    const handleMarkerClick = (d: any) => {
        setCurrentLaunch(d, dispatch);
    }

    const showTooltip = (launch: any) => {
        return launch.name;
    };

    return (
        <div data-testid='map'>
            <svg width={scale * 3} height={scale * 3} viewBox="0 0 800 450">
                <g>
                    {(geographies as []).map((d, i) => (
                        <path
                            key={`path-${i}`}
                            d={geoPath().projection(projection)(d) as string}
                            fill={`rgba(38,50,56,${(1 / (geographies ? geographies.length : 0)) * i})`}
                            stroke="aliceblue"
                            strokeWidth={0.5}
                        />
                    ))}
                </g>
                <g>
                    {state && state?.launches && state?.launches?.map((d: any, i: any) => (
                        <circle
                            key={d.name}
                            cx={returnProjectionValueWhenValid(d.coordinates, 0)}
                            cy={returnProjectionValueWhenValid(d.coordinates, 1)}
                            r={5}
                            fill="#E91E63"
                            stroke="#FFFFFF"
                            onClick={() => handleMarkerClick(d)}
                        />
                    ))}
                </g>
            </svg>
        </div>
    )
};

export default WorldMapAtlas;