import React from 'react';

function Search({onSearch}) {
    return (
        <div>
            <label htmlFor='search'>Search for stories: </label>
            <input type="text" onChange={onSearch}/>
            
        </div>
    );
}

export default Search;