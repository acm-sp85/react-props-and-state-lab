import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {



  render() {
    return <div className="ui cards">

        <Pet pet={this.props.petInfo} />
      </div>
  }
}

export default PetBrowser
