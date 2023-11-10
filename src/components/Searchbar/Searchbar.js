import { Component } from 'react';
import { Header, Form, Input, SearchButton } from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = evt => {
    this.setState({
      query: evt.target.value.trim().toLowerCase(),
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.query);
    evt.target.reset();
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FiSearch size={20} />
          </SearchButton>

          <Input
            type="text"
            autoComplete="off"
            name="query"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
