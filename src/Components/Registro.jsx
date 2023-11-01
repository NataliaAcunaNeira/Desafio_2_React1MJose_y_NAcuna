import React from 'react';
import { useState } from 'react';
import Registro from './Registro';
import Formulario from './Formulario';
import Alert from './Alert';
import Header from './Header';
import SocialButton from './SocialButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaBeer } from 'react-icons/fa';

const Question = () => {
    return <h3> Let's go for a <FaBeer />? </h3>
}


export default Question


