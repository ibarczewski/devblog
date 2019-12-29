import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './NightMode.module.scss';

const NightMode = () => {
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch({type: 'TOGGLE_NIGHT_MODE'});
    }

    return (
        <button onClick={toggle}>Toggle</button>
    )
}

export default NightMode;