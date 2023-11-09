import { Header, Form, Input, SearchButton } from "./Searchbar.styled";
import { FiSearch } from 'react-icons/fi';


export const Searchbar = ({onSubmit}) => {
  return (
    <Header>
      <Form onSubmit={onSubmit}> 
        <SearchButton type="submit">
          <FiSearch size={20}/>
        </SearchButton>

        <Input
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
