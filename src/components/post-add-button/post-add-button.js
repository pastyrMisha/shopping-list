import React, {Component} from 'react';
import TooltipItem from '../tooltip-item/tooltip-item';
import './post-add-button.sass';

export default class PostAddButton extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        });
    }

render() {
    
    return (
        <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
            <input
                type="text"
                placeholder="Введите название товара"
                className="form-control new-post-label"
                onChange={this.onValueChange}
                value={this.state.text}
            />
            <button
                type="submit"
                id={"postButton"}
                className="btn btn-outline-danger">
                Добавить товар
                </button>
                <TooltipItem 
                        id={"postButton"} 
                        tooltipTitle={"Создать товар"} 
                />
        </form>
    )
}
}