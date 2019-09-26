import React , { Component} from 'react'
import './Product.css'

class Product extends Component {


    render() {
        return (
         <div className='product'>
            <div className='prodcut__img--container'>
               <img src={this.props.imageUrl} alt={this.props.title} className='product__img'/>
            </div>
            <div className='product__text'>
                <h3>{this.props.title}</h3>
                <p>{this.props.price} $</p>
                <p>{this.props.quantity}</p>
            </div>
        </div>
        )
    }
}


export default Product