import React from "react";

const HorizontalLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

export default HorizontalLine;