import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: { type: "all" }
    }
  }

  onChangeType = (type) => {
    this.setState((state) => ({
      filters: { type }
    }));
  }


  onFindPetsClick = () => {

    const filterType = this.state.filters.type
    if (filterType === "all") {
      fetch(`/api/pets`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            pets: [...data]
          })

        })

    } else {


      fetch(`/api/pets?type=${filterType}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            pets: [...data]
          })

        })
    }

  }

  onAdoptPet = () => {

  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters  onClick={this.onFindPetsClick} filters={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser petInfo={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
