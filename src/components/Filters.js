import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: { type: "all" }
    }

  }

  handleChange = event => {

    const animalType = event.target.value
    this.props.filters(animalType)
    this.setState({
      filters: animalType
    });

  }

  handleClick = event => {
    this.props.onClick()
  }

  render(props) {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.handleChange}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
