import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Message } from 'semantic-ui-react';

const MainSearchBar = ({
  categories, cuisines, search,
}) => {
  const options = {
    categories: categories.length ? categories.map((cat) => ({
      key: cat.id,
      text: cat.name,
      value: cat.id,
    })) : [],
    cuisines: cuisines.length ? cuisines.map((cuisine) => ({
      key: cuisine.id,
      text: cuisine.name,
      value: cuisine.id,
    })) : [],
  };

  // Local state
  const [categoriesIds, setCategoriesIds] = useState([]);
  const [cuisinesIds, setCuisinesIds] = useState([]);
  const [error, setError] = useState('');

  // Handlers
  const onSearch = () => {
    if (categoriesIds.length || cuisinesIds.length) {
      search(categoriesIds, cuisinesIds);
    } else {
      setError('Please make sure you choose at least one category or cuisine type !');
    }
  };

  return (
    <Form onSubmit={onSearch}>
      {error ? <Message negative content={error} /> : <></>}
      <Form.Group widths="equal">
        <Form.Dropdown
          placeholder="Select category..."
          options={options.categories}
          onChange={(event, data) => setCategoriesIds(data.value)}
          search
          selection
          multiple
          fluid
        />
        <Form.Dropdown
          placeholder="Select cuisine type..."
          options={options.cuisines}
          onChange={(event, data) => setCuisinesIds(data.value)}
          search
          selection
          multiple
          fluid
        />
        <Form.Button content="Search" icon="search" width="5" />
      </Form.Group>
    </Form>
  );
};

MainSearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.func.isRequired,
};

export default MainSearchBar;
