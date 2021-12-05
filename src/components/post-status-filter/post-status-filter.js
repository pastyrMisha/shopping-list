import React, { Component } from 'react';
import './post-status-filter.sass';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все товары'},
            {name: 'list', label: 'Мой список'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'btn-success' : 'btn-outline-success';
            return (
                <Button
                    key={name} 
                    type='button' 
                    className={` btn ${clazz}`}
                    onClick={()=> onFilterSelect(name)}>{label}</Button>    
            )
        });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}
}
