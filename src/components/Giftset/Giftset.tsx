import React, { useState } from 'react'
import './Giftset.scss'
import gift from '../../assets/gift.png'

const Giftset: React.FC = (): JSX.Element => {
    const [select, setSelect] = useState<number>(1)


    return (
        <div className='giftset'>
            <div className='giftset__strip'></div>
            <div className='giftset__header'>
                <h6>Best Gift For Best Friend</h6>
                <h2>GIFTSET</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                <div className='giftset__card'>
                    <div className='giftset__card-left'><img src={gift} alt="gift" /></div>
                    <div className='giftset__card-right'>
                        <h3>285</h3>
                        <h2> Giftset "Vietnamese filter coffee"</h2>
                        <p>Great gift for coffee connoisseurs. Coffee beans are carefully selected by Revo, roasted according to the technology and know-how learned from famous artisans, along with the love and passion of the coffee maker… creating pure cups of coffee only exclusively for you.</p>
                        <form action="">
                            <button>Buy Now</button>
                            <p>Detail</p>
                        </form>
                    </div>
                </div>
                <div className='giftset__btns' >
                    <button className={`giftset__btn ${select === 1 ? 'giftset__btn--active' : ''}`}
                        onClick={() => setSelect(1)}>1</button>
                    <button className={`giftset__btn  ${select === 2 ? 'giftset__btn--active' : ''}`}
                        onClick={() => setSelect(2)}>2</button>
                    <button className={`giftset__btn  ${select === 3 ? 'giftset__btn--active' : ''}`}
                        onClick={() => setSelect(3)}>3</button>
                </div>
            </div>

        </div>
    )
}

export default Giftset