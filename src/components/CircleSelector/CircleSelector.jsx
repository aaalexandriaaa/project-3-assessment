import React from 'react'
import './circleselector.css'

const CircleSelector = (props) => {
    return (
        <div className="CircleSelector">
            {props.circleNo.map((circle, idx) =>
                <button
                    className={props.circleIdx === idx ? 'selected' : ''}
                    key={idx}
                    onClick={() => props.handleCircleChoice(idx)}
                >
                    {props.circleIdx === idx ? ` Circle ${idx + 1} Selected` : `Select Circle ${idx + 1}`}
                </button>
            )}
        </div>
    );
}

export default CircleSelector;