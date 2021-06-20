import React, { Component } from 'react'

export default class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call : ', props.prop_value);
        return {};
    }

    constructor(porps){
        super(porps);
        this.state = {};
        console.log('1. constructor Call');
    }
    render() {
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNTION]</h2>
        );
    }
}
