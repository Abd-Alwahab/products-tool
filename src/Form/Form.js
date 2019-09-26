import React , { Component } from 'react'
import './Form.css'

class Form extends Component {

    constructor(){
        super()
        this.state = {
            title: '',
            price: 0,
            quantity: 0,
            imageUrl: ''

        }
    }

    handleInput  = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImage = (e) => {
        this.setState({
            imageUrl: URL.createObjectURL(e.target.files[0])
        })

        e.target.value = null
        
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addProduct(this.state)
        this.setState({
            title: '',
            price: 0,
            quantity: 0,
            imageUrl: ''
        })
    }


    render() {
        return (
            <div className='Form'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='enter a title' name='title' value={this.state.title} className='input'  onChange={this.handleInput} required/>
                    <input type='number' placeholder='10$' name='price' value={this.state.price}  className='input' onChange={this.handleInput} />
                    <input type='number' placeholder='quantity' name='quantity' value={this.state.quantity}  className='input' onChange={this.handleInput} />
                    <input type='file' className='input' onChange={this.handleImage} /> 
                    <button className='add__btn'>Add Product</button>
                </form>

                <div className='form__preview'>
                       <div className='image__container'>
                       <img src={this.state.imageUrl} alt={this.state.title} />
                       </div> 
                    <h3>{this.state.title}</h3>
                    <p>{this.state.price} $</p>
                    <p>{this.state.quantity} items</p>
                </div>
            
            </div>
        )
    }
}


export default Form