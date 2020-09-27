import React from 'react';
import SummaryItems from './SummaryItems';
import Total from './Total';

export default function Summary(props){

    return (
        <section className="main_summary">
            <h2>Your Cart</h2>
            <SummaryItems selected={props.selected} />
            <Total selected={props.selected} />
        </section>
    )
}