import React from "react"
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps"

const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

export default function MapChart() {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 600,
            }}
        >
            <Geographies
                geography="/features.json"
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            style={{
                                default: {
                                    fill: "#A5F1E9",
                                    stroke: "#ffffff",
                                    strokeWidth: "2.0"
                                },
                                hover: {
                                    fill: "#7FBCD2"
                                },
                                pressed: {
                                    fill: "#FFEEAF"
                                }
                            }}
                        />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[2.3522, 48.8566]}
                dx={-90}
                dy={-30}
                curve={0.5}
                connectorProps={{
                    stroke: "rgba(0,0,0,0.5)",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="rgba(0,0,0,0.5)">
                    {"Paris"}
                </text>
            </Annotation>
        </ComposableMap>
    )
}
