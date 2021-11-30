import React from 'react';
import './app-header.sass';

const AppHeader = ({listed, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>Мои покупки</h1>
            <h2>Всего {allPosts} товара(-ов), добалено в список {listed}</h2>
        </div>
    )
}

export default AppHeader;