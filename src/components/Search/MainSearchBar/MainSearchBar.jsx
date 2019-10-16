import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Message, Button } from 'semantic-ui-react';

const MainSearchBar = ({
  categories, cuisines, search, getCategories, getCuisines,
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

  const onReload = () => {
    getCategories();
    getCuisines();
  };

  return (
    <Form onSubmit={onSearch}>
      {error ? <Message negative content={error} /> : <></>}
      {categories.length && cuisines.length ? (
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
      ) : (
        <>
          <Message>
            Unable to load categories and cuisines type, please check you rinternet connection
            {' '}
            <Button icon="redo" content="Reload" onClick={onReload} />
          </Message>

        </>
      )}
    </Form>
  );
};

MainSearchBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  cuisines: PropTypes.arrayOf(PropTypes.object).isRequired,
  search: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getCuisines: PropTypes.func.isRequired,
};

export default MainSearchBar;
