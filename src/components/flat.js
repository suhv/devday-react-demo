import React, { Component } from 'react';
import './flat.css';

class Flat extends Component {

    handleClick = () => {
        this.props.onClick(this.props.flat)
    }

    render() {
        const title = this.props.flat.price + '$ - ' + this.props.flat.name;
        const style = { backgroundImage: `url(${this.props.flat.imageURL})` }
        return (
            <div className='flat' onClick={this.handleClick}>
                <div className='flat-picture' style={style}></div>
                <div className='flat-title'>
                    {title}
                </div>
            </div>
        );
    }
}

export default Flat;