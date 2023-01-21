import React from "react";
import './Breakfasts.css';

const Breakfasts = () => {
    return (
        <div className="breakfasts-container">
            <h2>
                Your breakfasts
            </h2>
            <span>Breakfasts you created</span>
            
            <div className="breakfast">
                <div className="breakfast-img">
                    <img alt="Breakfast" src="https://images.pexels.com/photos/3138578/pexels-photo-3138578.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                </div>
                <div className="breakfast-details">
                    <h3>Vegan Sunshine</h3>
                    <p>Tomorrow: 8:00 - 11:00</p>
                    <p>
                        Vegan everything join us for a healthy breakfast full fo vegan dishes and cokkies
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Breakfasts;