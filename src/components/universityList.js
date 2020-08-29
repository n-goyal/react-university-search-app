import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal.js'

class Univerisities extends Component {

  state = {
      showModal: false,
      hideModal: true,
  }

  updateModal = () => {
    this.setState({showModal: true});
    console.log(this.props.prop1);
  }

  hideModal = () => {
    this.setState({showModal: false});
  }

  static propTypes = {
    universities: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="container wrapper">
        <Modal show={this.state.showModal} handleClose={this.hideModal}
          />
        {this.props.universities.map((university) => (
          <div className="children" key={university.name}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{university.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{university.country + ' ('+ university.alpha_two_code + ')'} </h6>
                  <h6 className="card-subtitle mb-2 text-muted">{university.domain}</h6>
                  <a type="button" href={university.web_page} className="btn btn-outline-primary website">Website</a>
                  <button type="button" ref="update" key={university.name} className="btn btn-outline-info update" onClick={this.updateModal}>Update</button>
                </div>
              </div>
          </div>
        ))}
      </div>
    )
  }
}


export default Univerisities;
