import React, { useState, useEffect } from "react";
import './jewelry.css';
// import {useState, useEffect} from 'react'

export default function Jewelry() {

    const [data, setData] = useState({});


    const getProducts = () => {
        fetch(`http://localhost:8080/api/products`)
            .then(res => {
                // console.log(res);
                if (res.ok) {
                    return res.json();
                } else {
                    console.log('error');
                }
            })
            .then(json => {
                console.log(json)
                setData(json);
            })
            .catch(err => {
                return err.sendStatus(500).send({
                    message: err.message || "some error occured"
                });
            });
    }
    useEffect(() => {
        getProducts();
    }, [])

    console.log(typeof (data));

    return (
        // <div class="grid-shop" >
        //     <></>
        /* <div>
                <h1 class="shop-heading">Jewelry</h1>
            </div>

            <div class="services">
                <h2> Services are provided SEPARATELY.</h2>
                <h4>Read below for more info!</h4>

                <li> Prices displayed are for Jewelry ONLY</li>
                <li> You must be 18+ years old with valid ID or Passport to request and recieve Piercings
                    Services
                </li>
                <li> Services are provided at a single stand alone location: Carbon Element in Concord, NC.</li>
                <img class="carbon" src="/images/carbon.jpg" height="200" width="200" /> */


        < div className="grid-Container" >
            <div className="gridpack-item">
                <div className="card">
                    <img src="./images/multiCartLobeAfg.jpg" alt=" Multi Gold" />
                    <p>Gold Flower with Blue Opal and Cubic Zirconia and Rose Gold Afghan Design Tunnels </p>
                    <br></br>
                    <p>$120 per pair</p>
                    <button>Add Flowers</button>
                    <button>Add Tunnels</button>
                </div>
            </div>
            <div className="gridpack-item">
                <div className="card">
                    <img
                        src="./images/cartGemLobeStone.jpg"
                        alt="Onyx Plugs"
                    />
                    <p>Gold Set with Onyx Tunnels</p>
                    <br></br>
                    <p>$270.00</p>
                    <button>Add</button>
                </div>
            </div>
            {
                Object.keys(data).map(item => {
                    return (
                        <>
                            <div className="gridpack-item">
                                <div className="card">
                                    <img
                                        src={item.Image}
                                        alt={item.ImageAlt}
                                    />
                                    <p>{item.description}</p>
                                    <br></br>
                                    <p>{item.price}</p>
                                    <button>Add</button>
                                </div>
                            </div>
                        </>
                    )
                })
            }
            {/* <div className="gridpack-item">
                <div className="card">
                    <img
                        src="./pics/iPadP.png"
                        alt="iPad Pro"
                    />
                    <h2>iPad Pro</h2>
                    <p>The Apple iPad Pro is a 12.9-inch touch screen tablet.</p>
                    <br></br>
                    <p>$799.00</p>
                    <button>Add</button>
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
                    <button>Add</button>
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
                    <button>Add</button>
                </div>
            </div> */}
        </div >

        // </div >
        // </div >

    );


}
