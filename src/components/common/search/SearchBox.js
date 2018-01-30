import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import Input from '../input/Input';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      option: {name:''}
    };

    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchClick() {
    this.props.searchOptionChange(this.state.option);
  }

  onSearchChange(event) {
    const name = event.target.value;
    this.updateOption({name});
  }

  updateOption(option) {
    this.setState({
      option: Object.assign({}, this.state.option, option)
    });
  }

  render() {
    return (
      <div>
        <Input placeholder="Search artists"
               onChange={this.onSearchChange}
               onPressEnter={this.onSearchClick}/>
        <Button onClick={this.onSearchClick} name="Search"/>
      </div>
    );
  }
}

SearchBox.propTypes = {
  searchOptionChange: PropTypes.func.isRequired
};

export default SearchBox;
