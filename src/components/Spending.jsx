import './spending.css'
import Grafic from './Grafic'

const Spending = () => {
  return (
    <div className='container-spending'>
        <div className="card-spending">
            <h1>Spending - Last 7 days</h1>
            <div className="my-grafic">
                <Grafic/>
            </div>
            <div className="card-total">
                <p>Total this month</p>
                <div className="total">
                    <h2>$478.33</h2>
                    <div className='p-inline'>
                        <p><span>+2.4%</span></p>
                        <p>from last month</p>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Spending
