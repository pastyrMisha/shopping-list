import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddButton from '../post-add-button/post-add-button';
import './app.sass';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                // {label: 'Картофель', list: false, like: false, id: '1'},
                // {label: 'Морковь', list: false, like: false, id: '2'},
                // {label: 'Капуста', list: false, like: false, id: '3'}
             ],
             term : '',
             filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToogleListed = this.onToogleListed.bind(this);
        this.onToogleLiked = this.onToogleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
        return {
            data: newArr 
        }
    })
}

tooglePost(id, item) {
    this.setState(({data})=>{
        const index = data.findIndex(elem => elem.id ===id);
        const old = data[index];
        const newItem = {...old, [item]: !old[item]};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
        return {
            data: newArr
        }
    })
}

onToogleListed(id){
    this.tooglePost(id, 'list')
}

onToogleLiked(id) {
    this.tooglePost(id, 'like')
}

addItem(body) {
    const newItem = {
        label: body,
        list: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
}

searchPost(items, term) {
    if (term.length === 0) {
        return items
    }

    return items.filter( (item) => {
        return item.label.indexOf(term) > -1
    });
}

filterPost(items, filter) {
    if (filter === 'list') {
        return items.filter(item => item.list)
    } else {
        return items
    }
}

onUpdateSearch(term) {
    this.setState({term})
}

onFilterSelect(filter) {
    this.setState({filter})
}

    render() {

        const {data, term, filter} = this.state;
        const listed = data.filter(item => item.list).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
            <AppHeader
            listed={listed}
            allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel
                onUpdateSearch={this.onUpdateSearch}/>
                <PostStatusFilter
                filter={filter}
                onFilterSelect={this.onFilterSelect}/>
            </div>
            <PostAddButton
                onAdd={this.addItem}/>
            <PostList 
                posts={visiblePosts} 
                onDelete={this.deleteItem}
                onToogleListed={this.onToogleListed}
                onToogleLiked={this.onToogleLiked}/>
            </div>
        )
}
}