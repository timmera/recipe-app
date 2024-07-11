import { useState } from 'react';
import { Box, Badge } from '@chakra-ui/react';
import { TextInput } from './ui/TextInput';
import { RecipeListPage } from '../pages/RecipeListPage';
import { data } from '../utils/data';

export const RecipeSearch = ({ clickFn }) => {
  const recipes = data.hits;
  const [searchField, setSearchField] = useState('');

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  return (
    <>
      <TextInput
        changeFn={handleChange}
        width={{ base: '60vw', md: '600px' }}
        mb={8}
      />
      {matchedRecipes.length > 1 ? (
        <>
          <Badge colorScheme="green" mb={'4'}>
            Found {matchedRecipes.length} recipes
          </Badge>
          <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
        </>
      ) : matchedRecipes.length == 1 ? (
        <>
          <Badge colorScheme="green" mb={'4'}>
            Found {matchedRecipes.length} recipe
          </Badge>
          <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
        </>
      ) : (
        <Box minH={'100vh'}>
          <Badge variant={'solid'} colorScheme={'red'}>
            No results found!
          </Badge>
        </Box>
      )}
    </>
  );
};
