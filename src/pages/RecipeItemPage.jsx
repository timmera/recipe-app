import {
  Badge,
  Box,
  Flex,
  Heading,
  Spacer,
  Image,
  Tag,
  Text,
} from '@chakra-ui/react';
import { Button } from '../components/ui/Button';
import { ArrowBackIcon } from '@chakra-ui/icons';
import '../App.css';

export const RecipeItemPage = ({ recipe }) => {
  const healthLabels = recipe.recipe.healthLabels;
  const cautionLabels = recipe.recipe.cautions;
  const dietLabels = recipe.recipe.dietLabels;
  const ingredients = recipe.recipe.ingredientLines;
  const cookingTime = recipe.recipe.totalTime;
  const energy = recipe.recipe.totalNutrients.ENERC_KCAL;
  const energyQuantityRounded = Math.round(energy.quantity);
  const protein = recipe.recipe.totalNutrients.PROCNT;
  const proteinQuantityRounded = Math.round(protein.quantity);
  const fat = recipe.recipe.totalNutrients.FAT;
  const fatQuantityRounded = Math.round(fat.quantity);
  const carbs = recipe.recipe.totalNutrients.CHOCDF;
  const carbsQuantityRounded = Math.round(carbs.quantity);
  const cholesterol = recipe.recipe.totalNutrients.CHOLE;
  const cholesterolQuantityRounded = Math.round(cholesterol.quantity);
  const sodium = recipe.recipe.totalNutrients.NA;
  const sodiumQuantityRounded = Math.round(sodium.quantity);
  const matchVeganHealthLabel = healthLabels.includes('Vegan');
  return (
    <>
      <Box
        minH={'100vh'}
        justify="center"
        alignItems="center"
        gap={6}
        bgColor={'whitesmoke'}
        sx={{
          boxShadow:
            '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05)',
          transition: '0.2s ease-in-out',
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

        <Box p="6">
          <Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
            >
              {recipe.recipe.dishType}
            </Box>
          </Box>

          <Flex>
            <Box mb="8" noOfLines={1}>
              <Text fontSize="2xl" fontWeight="bold">
                {recipe.recipe.label}
                {matchVeganHealthLabel ? (
                  <Badge variant="solid" colorScheme="green" ml="2">
                    Vegan
                  </Badge>
                ) : null}
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Box>
              <Box color="gray.800" fontSize="sm">
                <Heading size={'xs'} color={'gray.600'}>
                  Cuisine Type:
                </Heading>
                <Text mb={2}>{recipe.recipe.cuisineType}</Text>
                <Heading size={'xs'} color={'gray.600'}>
                  Meal Type:
                </Heading>
                <Text mb={2}>{recipe.recipe.mealType}</Text>
                <Heading size={'xs'} color={'gray.600'}>
                  Total cooking time:
                </Heading>
                <Text mb={2}>{`${cookingTime} minutes`}</Text>
                <Heading size={'xs'} color={'gray.600'}>
                  Total nutrients:
                </Heading>
                <Text>
                  Energy: {energyQuantityRounded} {energy.unit}
                </Text>
                <Text>
                  Protein: {proteinQuantityRounded} {protein.unit}
                </Text>
                <Text>
                  Fat: {fatQuantityRounded} {fat.unit}
                </Text>
                <Text>
                  Carbs: {carbsQuantityRounded} {carbs.unit}
                </Text>
                <Text>
                  Cholesterol: {cholesterolQuantityRounded} {cholesterol.unit}
                </Text>
                <Text>
                  Sodium: {sodiumQuantityRounded} {sodium.unit}
                </Text>
              </Box>
            </Box>
            <Spacer />
            <Box color="gray.800" fontSize="sm" minH={'100%'} maxW={'300px'}>
              <Heading size={'xs'} color={'gray.600'} mb={'2'}>
                Ingredients
              </Heading>
              {ingredients.map((ingredient, index) => (
                <Text key={index} variant={'subtle'} size="sm">
                  {ingredient}
                  {'\n'}
                </Text>
              ))}
            </Box>
            <Spacer />
            <Box maxW={'200px'}>
              <Heading size={'xs'} color={'green.600'} mb={'2'}>
                Health
              </Heading>
              {healthLabels.map((healthLabel, index) => (
                <Tag
                  key={index}
                  colorScheme="green"
                  variant={'subtle'}
                  size="sm"
                  mr="1"
                >
                  {healthLabel}
                </Tag>
              ))}
              {cautionLabels.length > 0 ? (
                <>
                  <Heading size={'xs'} color={'red.600'} mt={'2'} mb={'2'}>
                    Caution
                  </Heading>
                  {cautionLabels.map((cautionLabel, index) => (
                    <Tag
                      key={index}
                      colorScheme="red"
                      variant={'subtle'}
                      size="sm"
                      mr="1"
                    >
                      {cautionLabel}
                    </Tag>
                  ))}
                </>
              ) : null}
              {dietLabels.length > 0 ? (
                <>
                  <Heading size={'xs'} color={'yellow.600'} mt={'2'} mb={'2'}>
                    Diet
                  </Heading>
                  {dietLabels.map((dietLabel, index) => (
                    <Tag
                      key={index}
                      colorScheme="yellow"
                      variant={'subtle'}
                      size="sm"
                      mr="1"
                    >
                      {dietLabel}
                    </Tag>
                  ))}
                </>
              ) : null}
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
