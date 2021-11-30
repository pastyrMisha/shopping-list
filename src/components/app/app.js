import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.sass';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Картофель', list: false, like: false, id: '1'},
                {label: 'Морковь', list: false, like: false, id: '2'},
                {label: 'Капуста', list: false, like: false, id: '3'}
             ],
             term : '',
             filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToogleImportant = this.onToogleImportant.bind(this);
        this.onToogleLiked = this.onToogleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        this.maxId = 4;
    }

deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id)
        const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
        return {
            data: newArr 
        }
    })
}

onToogleImportant(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);
        const old = data[index];
        const newItem = {...old, list: !old.list};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        return {
            data: newArr
        }
    })
}

onToogleLiked(id) {
    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const old = data[index];
        const newItem = {...old, like: !old.like};
        
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        return {
            data: newArr
        }
    })
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
            <PostList 
                posts={visiblePosts} 
                onDelete={this.deleteItem}
                onToogleImportant={this.onToogleImportant}
                onToogleLiked={this.onToogleLiked}/>
            <PostAddForm
                onAdd={this.addItem}/>
            </div>
        )
}
}