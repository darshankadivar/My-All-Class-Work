import React, { useState } from 'react'

export default function Form() {
  const [brandname, setBrandname] = useState('')
  const [productdetails, setProductdetails] = useState('')
  const [price, setPrice] = useState('')
  const [inputurl, setInputUrl] = useState('')

  const [record, setRecord] = useState([])

  const handleClick = (e) => {
    e.preventDefault();

    let obj = { brandname, productdetails, price, inputurl }
    setRecord([...record, obj])

    setBrandname('')
    setProductdetails('')
    setPrice('')
    setInputUrl('')
  }
    return (
        <div className="form-details">
            <h1>Event Handler</h1>
            <input type="text" placeholder='Enter Your Imageurl' onChange={(e) => setInputUrl(e.target.value)} value={inputurl} />
            <input type="text" placeholder='Enter Your Brandname' onChange={(e) => setBrandname(e.target.value)} value={brandname} />
            <input type="text" placeholder='Enter your product details' onChange={(e) => setProductdetails(e.target.value)} value={productdetails} />
            <input type="text" placeholder='Enter Your Price' onChange={(e) => setPrice(e.target.value)} value={price} />

            <button className="button" onClick={handleClick}>Add Product</button>

            <div className='pod-card'>
                {
                    record.length > 0 ?

                        record.map((e, i) => {
                            return <div className="pod_card" key={i}>
                                <img src={e.inputurl} alt="" />
                                <h4>{e.brandname}</h4>
                                <p className="details">{e.productdetails}</p>
                                <h6><span>$</span>{e.price}</h6>
                            </div>
                        })

                        :
                        <p>No data found</p>
                }
            </div>
        </div>
    )
}
