import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.sass';

const PostList = ({posts, onDelete, onToogleListed, onToogleLiked}) => {


    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        const mame = item.label;
        
        return (
            <li key={id} className='list-group-item'>
                  <PostListItem 
                  {...itemProps}
                  mame={mame}
                  onDelete={() => onDelete(id)}
                  onToogleListed={() => onToogleListed(id)}
                  onToogleLiked={() => onToogleLiked(id)}/>
            </li>
        )
    })
    
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;