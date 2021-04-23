import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let nav = {
    main: "/index",
    about: "/about",
    prise: "buy/price"
}
const pic = {
    width: "450px",
    height: "250px",
    picture: "https://bessarabiainform.com/wp-content/uploads/2019/02/continuous-integration-for-react-native.png"
}

let contact = {
    phones: {
        phonenumber: "+380978756432",
        phonenumber2: "+380638756432",
        phonenumber3: "+380508756432"
    },
    address: {
        sity: "Kremenchuk",
        street: "Geroev/street",
        house: "45"
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App title="My title" hero="goooooooooo" nav={nav} pic={pic} contact={contact}/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();