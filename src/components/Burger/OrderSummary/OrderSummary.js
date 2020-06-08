import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSymmary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
            <Auxiliary>
                <h3>Your order</h3>
                <p>A delicious burger with the following: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: {this.props.price}</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Success</Button>
            </Auxiliary>
        );
    }

}

export default OrderSymmary;