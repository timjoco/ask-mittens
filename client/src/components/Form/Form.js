import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }} className="container">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                placeholder="First Name"
                id="first_name"
                type="text"
                className="validate"
              />
              <label for="first_name"></label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Last Name"
                id="last_name"
                type="text"
                classNamess="validate"
              />
              <label for="last_name"></label>
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
              <label for="email"></label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <textarea
                placeholder="Ask about your cat!"
                id="textarea1"
                class="materialize-textarea"
              ></textarea>
              <label for="textarea1"></label>
            </div>
          </div>
        </form>
        <div>
          <button className=" waves-effect waves-light btn">
            Ask Mittens!
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
