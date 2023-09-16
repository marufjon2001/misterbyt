import React from 'react';
import Glavnya from "./Glavnay/Glavnay"
import Glavnayremont from './Glavnayremont/Glavnayremont';
import Mastera from './Mastera/Mastera';

const GLavnayaMenu = () => {
    return (
        <div>
            <Glavnya/>
            <Glavnayremont/>
            <Mastera/>
        </div>
    );
}

export default GLavnayaMenu;
