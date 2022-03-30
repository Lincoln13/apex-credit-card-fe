import React from "react";
import {useState} from 'react'

const AddCreditCard = ({onAdd}) => {

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [limit, setLimit] = useState('')

    const  onSubmit = (e) => {
        e.preventDefault()

        if (!cardName || !cardNumber || !limit) {
            alert('Please enter all details!')
            return
        }

        onAdd({cardName, cardNumber, limit})

        setCardName('')
        setCardNumber('')
        setLimit('')
    }

    return (
        <header>
            <h1 className="header">Credit Card System</h1>
            <h3 className="header">Add</h3>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-control'>
                    <label>Card Name:</label>
                    <input type='text' value={cardName} onChange={(e) => setCardName(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Card Number:</label> 
                    <input type='text' value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label>Limit:</label>
                    <input type="text" value={limit} onChange={(e) => setLimit(e.target.value)} />
                </div>
                <input type='submit' value='Add' className='btn btn-block' />
            </form>
        </header>
    )
}

export default AddCreditCard