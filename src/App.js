import React from "react";
import unsplash from "./api/unsplash";
import SearchBar from "./Components/SearchBar";
import ImageList from "./Components/ImageList";

class App extends React.Component{

  state = {images : []}

  onSearchSubmit = async (term) => {
    
    const response = await unsplash.get('/search/photos',{params : {query : term}});

    this.setState({images : response.data.results})
  }

  render(){
    return (
      <div className = "ui container">
        <SearchBar onSearchSubmit =  {this.onSearchSubmit} />
        <ImageList images = {this.state.images} />
      </div>
    );
  }
};

export default App;