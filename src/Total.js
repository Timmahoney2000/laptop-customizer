import React from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

export default function Total(props){

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0   
    );

    return (
        <div className="summary_total">
            <div className="summary_total_label">Total</div>
            <div className="summary_total_value">
                {USCurrencyFormat.format(total)}
            </div>
        </div>
    )
}