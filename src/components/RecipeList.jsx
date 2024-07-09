import { Flex, Text } from '@chakra-ui/react';

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <>
      <Flex
        gap={8}
        w={['full', '75%']}
        flexWrap="wrap"
        flexDir={['column', 'row']}
        justify="center"
        alignItems="center"
      >
        {recipes.map((recipe) => (
          <Text key={recipe.index} recipe={recipe} clickFn={clickFn}></Text>
        ))}
      </Flex>
    </>
  );
};
