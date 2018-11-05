import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import {Link} from 'react-router-dom'

import axios from 'axios';

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card  card-body mb-3 bg-warning">
              <h4 className="text-white">
                {name}{' '}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-search-plus text-success  "
                />
                <i
                  className="fas fa-times text-danger"
                  style={{ cursor: 'pointer', float: 'right' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                  <Link to={`contact/edit/${id}`}>  
                    <i className="fas fa-pencil-alt float-right mr-2 text-dark"></i>
                  </Link>

              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item ">{email}</li>
                  <li className="list-group-item ">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
