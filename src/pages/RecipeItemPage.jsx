import { Flex, Image, Text } from '@chakra-ui/react';

export const RecipeItemPage = ({ recipe, clickFn }) => {
  return (
    <Flex
      gap={8}
      w={['full', '75%']}
      flexWrap={'wrap'}
      flexDir={['column', 'row']}
      justify={'center'}
      alignItems={'center'}
      cursor={'pointer'}
      onClick={() => clickFn(recipe)}
    >
      <Image
        src={recipe.imgUrl}
        alt={recipe.alt}
        borderRadius="full"
        w={50}
        h={50}
      />
      <Text fontWeight={'450'}>{recipe.label}</Text>
    </Flex>
  );
};
