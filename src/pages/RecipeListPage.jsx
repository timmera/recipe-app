import { RecipeItemCard } from '../components/RecipeItemCard';
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { RecipeSearch } from '../components/RecipeSearch';
import { RecipeItemPage } from './RecipeItemPage';
import { useState } from 'react';

import { data } from '../utils/data';
import '../App.css';

export const RecipeListPage = ({ clickFn }) => {
  const recipes = data.hits;
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <Heading color="whitesmoke" m={'6'}>
        My Recipe App
      </Heading>
      <Flex justifyContent="center">
        <Box>
          <RecipeSearch clickFn={setSelectedItem} />
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        gap="4"
        wrap="wrap"
        justifyContent="center"
        direction="row"
      >
        {recipes.map((item) => (
          <RecipeItemCard
            clickFn={clickFn}
            item={item}
            key={item.recipe.label}
          />
        ))}
      </Flex>
    </>
  );
};
