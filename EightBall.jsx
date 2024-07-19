import React, { useState } from 'react';

function EightBall({ answers }) {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    const handleClick = () => {
        const randomIdx = Math.floor(Math.random() * answers.length);
        const { msg, color } = answers[randomIdx];
        setMsg(msg);
        setColor(color);
    };

    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor: color,
                color: "white",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer",
                userSelect: "none",
            }}
        >
            <p>{msg}</p>
        </div>
    );
}

export default EightBall;