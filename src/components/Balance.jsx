import './balance.css'
const Balance = () => {
  return (
    <div className="card-balance">
      <p>My balance</p>
      <div className="saldo-inline">
        <span>$921.48</span>
        <div className="logo">
            <img src="../../public/images/logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Balance
