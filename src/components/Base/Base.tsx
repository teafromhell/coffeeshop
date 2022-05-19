import './Base.scss'
import cups from '../../assets/cups.svg';
import machine from '../../assets/machine.svg';
import lock from '../../assets/lock.svg';
import shop from '../../assets/shop.svg';

const Base: React.FC = () => {
  return (
    <div className='base'>
      <div className='base__header'>
        <h6>Your Personalized Coffee</h6>
        <h2>COFFEE BUILD YOUR BASE</h2>
      </div>
      <div className='base__svgs'>
        <div><img src={shop} alt="shop" />
          <h4>Source</h4>
          <p>Arabica and Robusta coffee beans meet international standards.</p>
        </div>
        <div><img src={lock} alt="lock" />
          <h4>Quality</h4>
          <p>Each coffee bean is a highly concentrated process of coffee artisans.</p></div>
        <div><img src={cups} alt="cups" />
          <h4>Beans</h4>
          <p>70% of the quality comes from the origin of the green bean.</p></div>
        <div><img src={machine} alt="machine" />
          <h4>Preparation</h4>
          <p>The coffee beans are molted through a thorough and rigorous roasting process.</p></div>

      </div>
    </div>
  )
}

export default Base