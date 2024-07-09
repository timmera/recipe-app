import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Button } from '../components/ui/Button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import '../App.css';

export const RecipeItemPage = ({ recipe }) => {
  return (
    <>
      <Box
        h={'100vh'}
        justify="center"
        alignItems="center"
        gap={8}
        bgColor={'whitesmoke'}
        sx={{
          boxShadow:
            '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05)',
          transition: '0.4s ease-in-out',
        }}
      >
        <Image
          src={recipe.recipe.image}
          boxSize={{ base: '600px', md: '880px' }}
          objectFit="cover"
          maxHeight={'30vh'}
          alt={recipe.recipe.label}
        />
        <Button
          pos={'absolute'}
          top={0}
          leftIcon={<ArrowBackIcon />}
          colorScheme="blackAlpha"
          text={'Back to recipes'}
          m={4}
          onClick={() => (window.location.href = '/')}
        />

        <Flex
          alignItems="center"
          gap="4"
          wrap="wrap"
          justifyContent="center"
          direction="column"
        >
          <Text fontWeight={'450'}>Your choice: {recipe.recipe.label}</Text>
        </Flex>
      </Box>
    </>
  );
};
