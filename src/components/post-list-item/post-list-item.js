import React from 'react';
import './post-list-item.sass';
import {UncontrolledTooltip } from 'reactstrap';

const PostListItem = ({label, onDelete, onToogleLiked, onToogleListed, list, like, mame}) => {
    
            let classNames = 'app-list-item d-flex justify-content-between d-inline-block';
            if (list) classNames +=' list';
            if (like) classNames +=' like';

                return (
                    <div className={classNames}>
                        <span
                         id={mame}
                         className="app-list-item-label"
                         onClick={onToogleLiked}>
                        {label}
                       </span>
                       <UncontrolledTooltip 
                                        placement="top"
                                        target={mame}
                                        trigger="hover"
                                        autohide={true}
                                        defaultOpen={false}>
                             Отметить
                        </UncontrolledTooltip>
                        <div className="d-flex justify-content-center align-items-center">
                            <button 
                            type="button"
                            className="btn-plus btn-sm"
                            data-toggle="tooltip"
                            title="Добавить в список"
                            onClick={onToogleListed}>
                                <i className="fa fa-plus"></i>
                            </button> 
                            <button 
                            type="button"
                            className="btn-trash btn-sm"
                            data-toggle="tooltip"
                            title="Удалить товар"
                            onClick={onDelete}>
                                <i className="fa fa-trash-o" ></i>
                            </button> 
                            <i className="fa fa-check"></i>
                        </div>
                    </div>
                )
}

export default PostListItem;