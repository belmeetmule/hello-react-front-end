import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectGreeting, fetchAsync, load} from "../../redux/reducers/greetingSlice";
import styles from "./Greeting.module.css";

export const Greeting = () => {
    const greeting = useSelector(selectGreeting);
    const dispatch = useDispatch();

    const onGreetingClicked = () => {
        dispatch(fetchAsync());
    };

    return (
        <div>
            <div className={styles.row}>
                <span className={styles.message}> 
                    {greeting} 
                </span>
            </div>
            <div className={styles.row}>
                <button 
                className={styles.button}
                aria-label="Decrement value"
                onClick={onGreetingClicked}>Greet</button>
            </div>
        </div>
    );
}