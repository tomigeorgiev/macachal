import React, { useState } from 'react';

const CartComponent = () => {
    const [isScaled, setIsScaled] = useState(false);

    return (
        <div>
            <div className={`bot ${isScaled ? 'scaled' : ''}`} id='basket'>
                <a href='/cart'>
                    <i className="fa-solid fa-basket-shopping"></i>
                </a>
                {/* Display the number of items in the cart */}
                {localStorage.getItem('addedToCart') === "added" && <p className='num'></p>}
            </div>
        </div>
    );
};

export default CartComponent;