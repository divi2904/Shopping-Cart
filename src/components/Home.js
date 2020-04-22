import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import cartData from './reducers/cart.json'
 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image card-img-wrap">
                            <img src={item.image} alt={item.name}/>
                            <span className="card-title item-name">{item.name}</span>
                            <span to="/" className="add-btn waves-effect" onClick={()=>{this.handleClick(item.id)}}>Add to cart</span>
                        </div>

                        <div className="card-content">
                            
                            <div className="price-wrap">
                                <p><b>${item.price.actual}$</b></p>
                                <p className="display-price">${item.price.display}</p>
                                <p className="discount"><b>{item.discount}% off</b></p>
                            </div>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)