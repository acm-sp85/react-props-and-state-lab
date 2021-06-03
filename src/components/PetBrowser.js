import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

// 1st: Map over your pets from props
// 2nd: Create a Pet Component
// 3rd: Pass in pet as a prop, a key, onAdoptPet, isAdopted


  render() {

    let petsList = this.props.pets
    let arrayPetsList = petsList.map((pet) => 
       <div key={pet.id}>
         <br></br>
         <Pet pet={pet} 
         onAdoptPet={this.props.onAdoptPet} 

        />
       </div>
 )

    return <div className="ui cards">
      {arrayPetsList}
      </div>
  }
}

export default PetBrowser
