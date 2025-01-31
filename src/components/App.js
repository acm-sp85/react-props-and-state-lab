import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      adoptedPets: [],
      filters: { type: "all" }
    }
  }

  handleAdoptPet = (petId) => {

    const toFindPet = this.state.pets
    let pets = toFindPet.map((pet) => {

      if (pet.id === petId) {

       return {...pet, isAdopted:true }
      } else {
        return pet
      }
    })

    this.setState({pets})
    console.log(pets)

  }
  onChangeType = (type) => {
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: type
      })
    })
  }


fetchPets = () => {
  let url = '/api/pets';

  if (this.state.filters.type !== 'all') {
    url += `?type=${this.state.filters.type}`
  }
  fetch(url)
  .then(response => response.json())
  .then(pets => {
    this.setState({
      pets
    })
  })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} filters={this.state.filters} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
