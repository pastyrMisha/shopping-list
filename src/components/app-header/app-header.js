import React from 'react';
import './app-header.sass';

const AppHeader = ({listed, allPosts, prefix}) => {

 const declension = (num, words) => words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];

 prefix = declension(allPosts, ['товар', 'товара', 'товаров']);

    return (
        <div className="app-header d-flex">
            <h1>Мои покупки</h1>
            <h2>Всего {allPosts} {prefix}, из них {listed} добалено в список покупок</h2>
        </div>
    )
}

export default AppHeader;