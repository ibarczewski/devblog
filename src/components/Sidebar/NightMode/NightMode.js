import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Switch from 'react-switch';

const NightMode = () => {
    const [checked, setState] = useState(false);
    const dispatch = useDispatch();
    const toggle = () => {
        dispatch({type: 'TOGGLE_NIGHT_MODE'});
        setState(!checked);
        setLocalStorage(!checked);
    }

    const setLocalStorage = (isToggled) => {
        window.localStorage.setItem("isNightModeToggled", isToggled);
    }

    useEffect(() => {
        if (window.localStorage.getItem("isNightModeToggled") === "true") {
            setState(true);
        }
    }, []);

    return (
        <Switch 
            onChange={toggle} 
            checked={checked}
            onColor="#5D93FF" 
            uncheckedIcon={
                <div
                    style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90%",
                    fontSize: "1.2em",}}>
                        ☀️
                </div>}
            checkedIcon={
                <div
                    style={{display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90%",
                    fontSize: "1.2em",}}>
                        🌙
                </div>}
        />
    )
}

export default NightMode;