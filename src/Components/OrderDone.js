import React from 'react'

const OrderDone = () => {
  return (
    <div className='py-5 m-5 markf text-light text-center'>
        <h1>Благодарим за Поръчката <i class="fa-regular fa-face-laugh-squint"></i></h1>
        <hr/>
        <h3 className='pink par-font-fam'>Очаквайте имейл за потвърждение!</h3>
        <a href='/' className='btn btn-light'>Обратно към сайта</a>
        <p className='text-muted mt-5'>Живи и здрави <i class="fa-regular fa-face-laugh-wink"></i></p>
        <p className='text-secondary mt-4'> #MaCaChallenge &copy; | 2024 MaChoys </p>
    </div>
  )
}

export default OrderDone;