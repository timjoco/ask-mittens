import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <div style={{ textAlign: 'center' }} className="page-container">
          <div className="content-wrap">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="First Name"
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    placeholder="Last Name"
                    id="last_name"
                    type="text"
                    className="validate"
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Email Address"
                    id="email"
                    type="email"
                    className="validate"
                  />
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    placeholder="Ask about your cat!"
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                </div>
              </div>
            </form>
            <div>
              <button className=" waves-effect waves-light btn">
                Ask Mittens!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
