import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

    return (
      <div className={showHideClassName}>
        <div className="modal-main" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Update University Details</h5>
              </div>
              <form className="modal-body form-container">
                <input type="text" name="name" id="name" placeholder="University Name" className="form-control input-name"/>
                <input type="text" name="website" id="web_page" placeholder="Website" className="form-control input"/>
                <input type="text" name="domain" id="domain" placeholder="domain" className="form-control input"/>
                <input type="text" name="code" id="alpha_two_code" placeholder="Alpha code" className="form-control input"/>
                <input type="text" name="country" id="country" placeholder="Country Name" className="form-control input"/>
              </form>
              <div className="modal-footer">
                <button type="button" className="btn btn-inline-primary">Save changes</button>
                <button onClick={this.props.handleClose} className="btn btn-secondary">close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Modal;
