import React from "react";

class SearchBar extends React.Component {

    state = {searchText : ''}

    onSubmitHandle = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.searchText);
    }

    render(){
        return (
        <div className="ui search segment" style={{marginTop : '10px'}} >
            <form onSubmit={this.onSubmitHandle} className="ui icon input" style={{width :'100%'}}>
                <input className = "prompt" type="text" value={this.state.searchText} onChange={(e) => {this.setState({searchText : e.target.value})}} placeholder="Image Search" />
                <i className="search icon"></i>
            </form>
        </div>
        );
    }
};

export default SearchBar;