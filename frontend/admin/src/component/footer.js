import React, { Component } from 'react';
import '../component/footer.css';

export default class header extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='heading'>Jointly Contributed By:-</div>
                <div className='title'>Souvik Sen, CSE , NIT Agartala</div>
                <div className='title'>Aditya Saha, ECE , NIT Agartala</div>
            </div>
        )
    }
}