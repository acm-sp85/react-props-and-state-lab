import React from 'react'

class Pet extends React.Component {
  handleOnClick = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }
  render() {
    const pet = this.props.pet
    const id = pet.id



    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === "female"? '♀' :'♂' }
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          <button className={pet.isAdopted === 'true'? "ui primary button" : "ui disabled button"} onClick={this.handleOnClick} >Already adopted</button>
          <button className={pet.isAdopted === 'false'? "ui disabled button" : "ui primary button"} onClick={this.handleOnClick} >Adopt pet</button> 
        </div>
      </div>
    )
  }
}

export default Pet
