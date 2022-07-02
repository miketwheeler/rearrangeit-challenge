import React from 'react'
import { useState, useEffect } from 'react';
import classes from './Components.module.css'
import CardComponent from './CardComponent';



const numStyleNorm = {
    color: 'black',
    marginRight: '10px',
}


function MyModal() {
    const startingCardOrder = [1,2,3,4,5,6,7,8,9];
    // const startingActiveList = [1,1,1,1,1,1,1,1,1]
    const [cardPlacementOrder, setCardPlacementOrder] = useState(startingCardOrder.map((num) => (<CardComponent num={num} />)));
    // let arr = [9];
    // const [inputArr, setInputArr] = useState([]);
    const numregex = /([1-9])/g;

    // useEffect(() => {
    //     console.log("cardPlacementChanged: ", cardPlacementOrder)
    // }, [cardPlacementOrder])
    // console.log(cardPlacementOrder)
    // const inputListener = document.querySelector('#input-number').addEventListener('keypress');
    // console.log()

    const handleChange = (e) => {
        e.preventDefault();
        const int = e.target.value.slice(-1);
        document.getElementById(`num-${int}`).style.replace('color: black;', 'color: aliceblue;')
        // .classList.toggle('numStyleLight')
        console.log(document.getElementById(`num-${int}`))
    }

    return (
        <div className={classes.modalBox}>
            <h2>Rearrange-It:  Amazing Card Rearranger Thingy</h2>

            <div className={classes.cardbase}>
                <div className={classes.cardGrid}>
                    {
                        cardPlacementOrder.map((num) => (
                            <CardComponent num={num} pos="top" />
                        ))
                    }
                    
                </div>
            </div>

            <div className={classes.instructions}>
                In any order you choose - Enter all numbers 1-9, and hit Rearrange-IT! to change the order of the cards above!
            </div>
            <div className={classes.inputsContainer}>
                {
                    startingCardOrder.map((num) => ( 
                        <div 
                            id={`num-${num}`} 
                            style={numStyleNorm}
                            >
                                {num}
                        </div>
                    ))
                }

                <input 
                    type="text" 
                    minlength="9" 
                    maxlength="9" 
                    pattern={numregex} 
                    id="input-number"
                    className={classes.inputfield} 
                    onChange={handleChange}
                    >
                    </input>

                <button className={classes.btnstyles}>
                    Rearrange-IT!
                </button>
            </div>
        </div>
    )
}

export default MyModal;