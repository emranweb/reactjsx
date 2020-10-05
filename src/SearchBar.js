import React from "react";

class SearchBar extends React.Component {
  state = { value: "" };

  onInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onformSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.value);
  };

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.onformSubmit}>
          <div className="ui form">
            <div className="field">
              <label>User Input</label>
              <input
                type="text"
                value={this.state.value}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
