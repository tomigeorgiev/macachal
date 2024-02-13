import React, { useState } from 'react';

const CartComponent = () => {
    const [isScaled, setIsScaled] = useState(false);

    return (
        <div>
            <div className={`bot ${isScaled ? 'scaled' : ''}`} id='basket'>
                <a href='/cart'>
                    <i className="fa-solid fa-basket-shopping"></i>
                    {localStorage.getItem('addedToCart') === "added" && <p className='num'></p>}
                </a>
            </div>
        </div>
    );
};

export default CartComponent;