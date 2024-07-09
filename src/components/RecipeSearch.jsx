import { useState } from 'react';
import { Text } from '@chakra-ui/react';
import { TextInput } from './ui/TextInput';
import { data } from '../utils/data';
import { RecipeList } from './RecipeList';

export const RecipeSearch = ({ clickFn }) => {
  const recipes = data.hits;
  const [searchField, setSearchField] = useState('');

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <TextInput
        changeFn={handleChange}
        width={{ base: '60vw', md: '600px' }}
        mb={8}
      />
    </>
  );
};
