import React from "react";
import './jewelry.css';
function Jewelry() {

    return (
        <div class="grid-shop" >
            <></>
            <div>
                <h1 class="shop-heading">Jewelry</h1>
            </div>

            <div class="services">
                <h2> Services are provided SEPARATELY.</h2>
                <h4>Read below for more info!</h4>
                <>
                    <li> Prices displayed are for Jewelry ONLY</li>
                    <li> You must be 18+ years old with valid ID or Passport to request and recieve Piercings
                        Services
                    </li>
                    <li> Services are provided at a single stand alone location: Carbon Element in Concord, NC.</li>
                    <img class="carbon" src="/images/carbon.jpg" height="200" width="200">


                        <div>
                            <figure class="shoppic">
                                <img class="ft-images" src="/images/multiCartLobeAfg.jpg" alt="Standard Lobe Earrings" width="400"
                                    height="350" />
                                <figcaption class="capform"> Gold Flower with Blue Opal and Cubic Zirconia- $120</figcaption>
                                <button> Add Me</button>
                                <figcaption class="capform"> Rose Gold Afghan Design Tunnels- $120 </figcaption>
                                <button> Add Me</button>
                            </figure>
                        </div>
                        <div>
                            <figure class="shoppic">
                                <img class="ft-images" src="/images/cartGemLobeStone.jpg" alt="Standard Lobe Earrings" width="400"
                                    height="350" />
                                <figcaption class="capform"> Raw Citrine with chain Stud- $220 </figcaption>
                                <button> Add Me</button>
                                <figcaption class="capform"> Gold Set with Onyx Tunnels- $270 </figcaption>
                                <button> Add Me</button>
                            </figure>
                        </div>
                        <div>
                            <figure class="shoppic">
                                <img class="ft-images" src="/images/cartAqua.jpg" alt="Charleston Museum" width="300" height="300" />
                                <figcaption class="capform"> Stainless Steel Diamond Flower Studs- $80 </figcaption>
                                <button> Add Me</button>
                            </figure>
                        </div>
                        <div>
                            <figure class="shoppic">
                                <img class="ft-images" src="/images/cartOpalFlower.jpg" alt="Heyward-Washington House" width="300"
                                    height="300" />
                                <figcaption class="capform"> Stainless Steel Diamond Flower Studs- $80 </figcaption>
                                <button> Add Me</button>
                            </figure>
                        </div>
                        <div>
                            <figure class="shoppic">
                                <img class="ft-images" src="/images/cartClick.jpg" alt="Folly Beach" width="300" height="350" />
                                <figcaption class="capform"> Stainless Steel Diamond Flower Studs- $80 </figcaption>
                                <button> Add Me</button>
                            </figure>
                        </div>
                        <div>
                            <figure class="shoppic">
                                <img class="ft-images" src="/images/lobeStars.jpg" alt="Standard Lobe Earrings" width="300"
                                    height="300" />
                                <figcaption class="capform"> Stainless Steel Diamond Flower Studs- $80 </figcaption>
                                <button> Add Me</button>
                            </figure>
                        </div>
                        <div>
                            <figure class="shoppic">
                                <img class="ft-images" src="/images/multiCartAqua.jpg" alt="Folly Beach" width="300" height="350" />
                                <figcaption class="capform"> Stainless Steel Diamond Flower Studs- $80 </figcaption>
                                <button> Add Me</button>
                                <figcaption class="capform"> Stainless Steel Diamond Flower Studs- $80 </figcaption>
                                <button> Add Me</button>
                            </figure>
                        </div>
                    </>

                </>


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
            </div>
        </div>
    );
}

export default Jewelry;