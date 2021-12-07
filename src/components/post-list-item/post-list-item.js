import React from 'react';
import { Component } from 'react';
import { Tooltip } from 'reactstrap';
// import PostList from '../post-list/post-list';
// import TooltipWrapper from '../tooltip-list/tooltip-list';
// import withTooltip from '../tooltip-list/tooltip-list';
import './post-list-item.sass';
// import { v4 as uuidv5 } from 'uuid';

const PostListItem = ({label, onDelete, onToogleListed, onToogleLiked, list, like, id}) => {

    // const [id] = React.useState("id" + uuidv5().slice(0, 6));
 
            let classNames = 'app-list-item d-flex justify-content-between d-inline-block';
            if (list) classNames +=' list';
            if (like) classNames +=' like';

            

                return (


                    <div className={classNames}>
                        <span
                         className="app-list-item-label"
                         id={id}
                         onClick={onToogleLiked}>
                        {label}
                       </span>




                        <div className="d-flex justify-content-center align-items-center">
                        <button 
                            id={id}
                            type="button"
                            className="btn-plus btn-sm"
                            onClick={onToogleListed}>
                                <i className="fa fa-plus"></i>
                        </button> 
                        {/* <TooltipWrapper 
                                    id={id} 
                                    tooltipTitle={"Добавить в список"}/> */}
                        <button 
                            type="button"
                            id={id}
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                                <i className="fa fa-trash-o" ></i>
                        </button> 
                        {/* <TooltipWrapper 
                                id={id} 
                                tooltipTitle={"Удалить товар"}/> */}


                        {/* <TooltipWrapper 
                                onClick={onToogleListed}
                                iconType={"fa fa-plus"} 
                                tooltipTitle={"Добавить в список"}/>
                        <TooltipWrapper 
                                onDelete={onDelete}
                                iconType={"fa fa-trash"}  */}
                                {/* tooltipTitle={"Удалить товар"}/> */}

                            {/* <button 
                            type="button"
                            id={"list" + id}
                            className="btn-plus btn-sm"
                            onClick={onToogleListed}>
                                <i className="fa fa-plus"></i>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen2}
                                    target={"list" + id}
                                    toggle={toggle2}>
                                    Добавить в список
                                </Tooltip>
                            </button> 
                            
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen3}
                                    target={"trash" + id}
                                    toggle={toggle3}>
                                    Удалить товар
                                </Tooltip> */}
                           
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
}

// export default PostListItem;

const withTooltip = (View) => {

    //   const [id] = React.useState("id" + uuidv5().slice(0, 6));
//       const [tooltipOpen, setTooltipOpen] = React.useState(false);
//   const toggle = () => setTooltipOpen(!tooltipOpen);
    return class extends Component {
            constructor(props) {
                super(props);
                this.state = {
                tooltipOpen: false
                };
                this.toggle = this.toggle.bind(this);
            }

            toggle() {
                this.setState({
                tooltipOpen: !this.state.tooltipOpen
                });
            }
            

            componentDidMount() {
                console.log(this.props.id);
            }

            render() {
               
                return (
                    <div>
                <View {...this.props}/>
                <Tooltip
                placement="top"
                isOpen={this.state.tooltipOpen}
                target={this.props.id}
                toggle={this.toggle}>
               подсказка
                </Tooltip>
                </div>
                );
            }
    }
}

export default withTooltip(PostListItem);