// Ask Tomi if this file needs to be deleted!

// import React from 'react'
// import { useState } from 'react'

// const Order = () => {
//     const [name, setName] = useState();
//     const [email, setEmail] = useState();
//     const [address, setAddress] = useState();
//     const [number, setNumber] = useState();
//     const [city, setCity] = useState();

//     const shipioRepository = new ShipioRepository();

//     const Push = (event) => {
//         event.preventDefault();

//         const min = 100000;
//         const max = 999999;
//         const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

//         shipioRepository.createOrder({
//             id: randomNumber, // Replace with real id.
//             customer_name: name,
//             customer_phone: number,
//             customer_email: email,
//             country: 'Bulgaria',
//             city: city,
//             address: address,
//             payment_method: 'cash',
//             order_total_amount: 'TEST',
//             currency: 'BGN',
//             products: 'TEST:1'
//         })
//             .then(() => console.log('Order successfuly created!'))
//             .catch(error => console.log(error));
//     }

//     return (
//         <>
//             <div className='container py-5 my-5 d-flex justify-content-center'>

//                 <form className='w-50 text-light text-center'>
//                     <h2 className='markf'>Поръчка</h2>
//                     <hr />
//                     <div className='my-2 '>
//                         <input type='text' className='form-control' placeholder='Имена' value={name} onChange={(e) => setName(e.target.value)} id='name' name='name' />
//                     </div>
//                     <div className='my-2'>
//                         <input type='email' placeholder='Email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} id='email' name='email' />
//                     </div>
//                     <div className='my-2'>
//                         <input type='tel' placeholder='Телефонен номер' className='form-control' value={number} onChange={(e) => setNumber(e.target.value)} id='phone' name='phone' />
//                     </div>
//                     <div className='my-2'>
//                         {/* <p>Адрес</p> */}
//                         <input type='text' placeholder='Град / село' className='form-control' value={city} onChange={(e) => setCity(e.target.value)} id='address' name='address' />
//                     </div>
//                     <div className='my-2'>
//                         {/* <p>Адрес</p> */}
//                         <input type='text' placeholder='Адрес' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} id='address' name='address' />
//                     </div>
//                     <hr />
//                     <button className='btn button-wh-pink markf' onClick={Push}>Поръчай</button>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Order