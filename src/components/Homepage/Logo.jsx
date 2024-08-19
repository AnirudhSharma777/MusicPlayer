import React from 'react'
import './Logo.css'

const Logo = () => {
    return (
        <div>

            <button className="button">
                <p className="button__text">
                    <span style={{ '--index': 0 }}>S</span>
                    <span style={{ '--index': 1 }}>P</span>
                    <span style={{ '--index': 2 }}>O</span>
                    <span style={{ '--index': 3 }}>T</span>
                    <span style={{ '--index': 4 }}>I</span>
                    <span style={{ '--index': 5 }}>F</span>
                    <span style={{ '--index': 6 }}>Y</span>
                    <span style={{ '--index': 7 }}> </span>
                    <span style={{ '--index': 8 }}></span>
                    <span style={{ '--index': 9 }}></span>
                    <span style={{ '--index': 10 }}>M</span>
                    <span style={{ '--index': 11 }}>U</span>
                    <span style={{ '--index': 12 }}>S</span>
                    <span style={{ '--index': 13 }}>I</span>
                    <span style={{ '--index': 14 }}>C</span>
                    <span style={{ '--index': 15 }}></span>
                    <span style={{ '--index': 16 }}></span>
                    <span style={{ '--index': 17 }}></span>
                    <span style={{ '--index': 18 }}></span>
                    <span style={{ '--index': 19 }}></span>
                </p>

                <div className="button__circle">
                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon"
                        width="14"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                    </svg>

                    <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="14"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button__icon button__icon--copy"
                    >
                        <path
                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                            fill="currentColor"
                        ></path>
                    </svg>
                </div>
            </button>

        </div>
    )
}

export default Logo