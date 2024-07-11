import { RecipeItemCard } from '../components/RecipeItemCard';
import { Box, Flex, Text } from '@chakra-ui/react';
import '../App.css';

export const RecipeListPage = ({ recipes, clickFn }) => {
  return (
    <>
      <Box minH={'100vh'}>
        <Flex gap="4" wrap="wrap" justifyContent="center" direction="row">
          {recipes.map((recipe) => (
            <RecipeItemCard
              recipe={recipe}
              key={recipe.recipe.label}
              clickFn={clickFn}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
};
