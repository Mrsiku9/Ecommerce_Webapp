import { ChangeEvent, useState } from "react"
import { BiArrowBack } from "react-icons/bi"

const Shipping = () => {
    const [shippingInfo,setShippingInfo] = useState({
adress:"",
city:"",
state:"",
pinCode:"",


    })

    const changeHandler =(e:ChangeEvent <HTMLInputElement | HTMLSelectElement>) => {
        setShippingInfo((prev)=> ( {...prev,[e.target.name]:e.target.value}))

    }


  return (
    <div className="shipping">
        <div>
            <button> <BiArrowBack/> </button>
        </div>
        
        <form action="">
        <h1>Shipping Address</h1>
            <input type="text" placeholder="Address" name="adress" value={shippingInfo.adress} onChange={changeHandler} />
        </form>
        <form action="">
            <input type="text" placeholder="City"  name="city"  value={shippingInfo.city} onChange={changeHandler} />
        </form>
        <form action="">
            <input type="text" placeholder="State" name="state" value={shippingInfo.state} onChange={changeHandler} />
        </form>
        <form action="">
            <input type="text" placeholder="Category" name="" value={shippingInfo.adress} onChange={changeHandler} />
        </form>
        <form action="">
            <input type="number" placeholder="PinCode"  name="" value={shippingInfo.pinCode} onChange={changeHandler} />
        </form>
     
    </div>
  )
}

export default Shipping
