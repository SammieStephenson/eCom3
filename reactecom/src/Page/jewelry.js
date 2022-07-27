import React from "react";
import './jewelry.css';
function Jewelry() {

    return (
        <div className="grid-Container">
            <div className="gridpack-item">
                <div className="card">
                    <img src="./pics/MacbookP.png" alt="Macbook Pro" />
                    <h2>MacBook Pro</h2>

                    <p>MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. </p>
                    <br></br>
                    <p>$999.00</p>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="gridpack-item">
                <div className="card">
                    <img
                        src="./pics/iMac.webp"
                        alt="iMac 24in"
                    />
                    <h2>iMac 24 inch</h2>
                    <p>The 24-inch iMac with a 4.5K display and 256GB of storage.</p>
                    <br></br>
                    <p>$1200.00</p>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="gridpack-item">
                <div className="card">
                    <img
                        src="./pics/iPadP.png"
                        alt="iPad Pro"
                    />
                    <h2>iPad Pro</h2>
                    <p>The Apple iPad Pro is a 12.9-inch touch screen tablet.</p>
                    <br></br>
                    <p>$799.00</p>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="gridpack-item">
                <div className="card">
                    <img
                        src="./pics/iPadM.jpeg"
                        alt="iPad Mini"
                    />
                    <h2>iPad Mini</h2>
                    <p>Mega power. Mini sized. Superfast 5G.</p>
                    <br></br>
                    <p>$499.00</p>
                    <button>Buy Now</button>
                </div>
            </div>
            <div className="gridpack-item">
                <div className="card">
                    <img
                        src="./pics/iPhone.jpeg"
                        alt="iPhone 13"
                    />
                    <h2>iPhone 13</h2>
                    <p>A lightning fast chip. A leap in battery life.</p>
                    <br></br>
                    <p>$799.00</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Jewelry;