import React from 'react';
import TooltipItem from '../tooltip-item/tooltip-item';
import './post-list-item.sass';

const PostListItem = ({label, onDelete, onToogleListed, onToogleLiked, list, like, id}) => {

let labelId = "post" + id,
    listId = "list" + id,
    trashId = "trash" + id,
    classNames = 'app-list-item d-flex justify-content-between d-inline-block';
    if (list) classNames +=' list';
    if (like) classNames +=' like';

                return (
                    <div className={classNames}>
                        <span
                         className="app-list-item-label"
                         id={labelId}
                         onClick={onToogleLiked}>
                        {label}
                         <TooltipItem 
                                    id={labelId} 
                                    tooltipTitle={"Отметить"}/>
                       </span>

                        <div className="d-flex justify-content-center align-items-center">
                        <button 
                            id={listId}
                            type="button"
                            className="btn-plus btn-sm"
                            onClick={onToogleListed}>
                                <i className="fa fa-plus"></i>
                        </button> 
                        <TooltipItem 
                                    id={listId} 
                                    tooltipTitle={"Добавить в список"}/>
                        <button 
                            type="button"
                            id={trashId}
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                                <i className="fa fa-trash-o" ></i>
                        </button> 
                        <TooltipItem 
                                    id={trashId} 
                                    tooltipTitle={"Удалить товар"}/>
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
}

export default PostListItem;