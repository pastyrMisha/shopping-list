import React from 'react';
import TooltipWrapper from '../tooltip-list/tooltip-list';
import './post-list-item.sass';
import { Tooltip } from 'reactstrap';

const PostListItem = ({label, onDelete, onToogleListed, onToogleLiked, list, like, id}) => {
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);
 
 
            let classNames = 'app-list-item d-flex justify-content-between d-inline-block';
            if (list) classNames +=' list';
            if (like) classNames +=' like';


                return (


                    <div className={classNames}>
                        <span
                         className="app-list-item-label"
                         id={"post" + id}
                         onClick={onToogleLiked}>
                        {label}
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen}
                            target={"post" + id}
                            toggle={toggle}>
                            Отметить
                        </Tooltip>
                       </span>



                        <div className="d-flex justify-content-center align-items-center">
                        <button 
          type="button"
          id={id}
          className="btn-plus btn-sm"
          onClick={onToogleListed}>
              <i className="fa fa-plus"></i>
                        </button> 
                        <TooltipWrapper />
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
                            <button 
                            type="button"
                            id={"trash" + id}
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                                <i className="fa fa-trash-o" ></i>
                                <Tooltip
                                    placement="top"
                                    isOpen={tooltipOpen3}
                                    target={"trash" + id}
                                    toggle={toggle3}>
                                    Удалить товар
                                </Tooltip> */}
                            {/* </button>  */}
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
}

export default PostListItem;