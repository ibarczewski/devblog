import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './NightMode.module.scss';

const NightMode = () => {
    const dispatch = useDispatch();
    const nightModeToggled = useSelector(state => state.isNightModeToggled);
    console.log(nightModeToggled);
    const toggle = () => {
        dispatch({type: 'TOGGLE_NIGHT_MODE'});
    }

    return (
        <button onClick={toggle}></button>
    )
}

export default NightMode;