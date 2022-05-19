import './Favs.scss';

import React, { useState} from 'react'
import { coffee } from '../../data/coffee'
import { coffee2 } from '../../data/coffee'
import { ICoffee } from '../../data/coffee'
import Card from '../Card/Card';
import { CgArrowRight } from 'react-icons/cg'

const Favs: React.FC = (): JSX.Element => {
    // useEffect(()=>{
    //     setW(window.innerWidth)
    // },[])
    const [w, setW] = useState<number>(0)

    const handleMoveRight = ()=>{
        setW(prev => prev - 400)
        console.log(w)
    }
    return (
        <div className='favs'>
            <div className='favs__strip'></div>
            <div className='favs__header'>
                <h6>Choose Your Favorite</h6>
                <h2>STANDARD GUARANTEE</h2>
            </div>
            
            <div className='favs__window-hidden'>
                <div className='favs__crsl' style={{transform: `translateX(${150 + w}px)`}}>
                    {coffee.map((item: ICoffee): JSX.Element => {
                        return <Card key={item.id} {...item} />
                    })}
                </div>
                <div>

                    <CgArrowRight className='favs__arrow' onClick={handleMoveRight} />
                </div>
                <div className='favs__crsl' style={{transform: `translateX( ${150 + w}px)`}}>
                    {coffee2.map((item: ICoffee): JSX.Element => {
                        return <Card key={item.id} {...item} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default Favs