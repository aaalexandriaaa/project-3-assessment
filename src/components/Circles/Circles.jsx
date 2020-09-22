import React from 'react'
import './circles.css'



const Circles = (props) => {
    return (
        <>
            <main className="Circles">
                {props.circleNo.map((circle, idx) =>
                    <>
                        <div
                            key={idx}
                            className={props.circleIdx === idx ? 'selected' : ''}
                            onClick={() => props.handleCircleChoice(idx)}
                        >
                            {idx + 1}
                        </div>
                    </>
                )}
            </main>
        </>
    );
}

export default Circles;



