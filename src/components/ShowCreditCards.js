import axios from "axios";
import React, { useEffect } from "react";
import {useState} from 'react'

const ShowCreditCards = ({}) => {

    const getUrl = 'http://localhost:8080/aon'
    const [creditCards, setCreditCards] = useState(null)

    useEffect(() => {
        axios.get(getUrl)
        .then(response => {
            setCreditCards(response.data)
        })
    }, [creditCards])

    if (creditCards) {
        return (
            <div>

                <header>
                <h3 className="header">Existing Cards</h3>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Card Number</th>
                        <th>Balance</th>
                        <th>Limit</th>
                    </tr>
                    {creditCards.creditCards.map((c) => (
                    <tr>
                        <td >{c.name}</td>
                        <td >{c.number}</td>
                        <td ><span>&#163;</span> {c.balance}</td>
                        <td ><span>&#163;</span> {c.limit}</td>
                    </tr>
                    ))}
                    
                </table>
                </header>
                
            </div>
        )
    }


    return (
        <div><h3>credit cards display</h3></div>
    )
}

export default ShowCreditCards