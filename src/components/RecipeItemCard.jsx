import {
  Badge,
  Box,
  Center,
  Flex,
  Card,
  Image,
  CardBody,
  Heading,
  Tag,
  Text,
} from '@chakra-ui/react';
import '../App.css';

export const RecipeItemCard = ({ recipe, clickFn }) => {
  const dietLabels = recipe.recipe.dietLabels;
  const healthLabels = recipe.recipe.healthLabels;
  const cautionLabels = recipe.recipe.cautions;
  const mealTypes = recipe.recipe.mealType;
  const dishTypes = recipe.recipe.dishType;
  const matchVeganHealthLabel = healthLabels.includes('Vegan');
  return (
    <Card
      onClick={() => clickFn(recipe)}
      borderRadius="full"
      w="sm"
      h="100%"
      m="2"
      minHeight={'70vh'}
      cursor="pointer"
      overflow={'hidden'}
      _hover={{
        bgColor: 'orange.100',
      }}
      bgColor={'whitesmoke'}
      sx={{
        boxShadow:
          '0 1px 1px rgba(0,0,0,0.25), 0 2px 2px rgba(0,0,0,0.20), 0 4px 4px rgba(0,0,0,0.15), 0 8px 8px rgba(0,0,0,0.10), 0 16px 16px rgba(0,0,0,0.05)',
        transition: '0.4s ease-in-out',
      }}
    >
      <CardBody>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderColor={'gray.300'}
          borderRadius="full"
          overflow="hidden"
          minHeight={'80vh'}
        >
          <Image h={64} w="sm" src={recipe.recipe.image} />
          {dishTypes.length > 0 ? (
            <>
              {dishTypes.map((dishType, index) => (
                <Center h="30px" color="blackAlpha.600" key={index} mb={'3'}>
                  {dishType}
                </Center>
              ))}
            </>
          ) : null}
          <Heading fontSize={'24'} textAlign={'center'} mb={'2'}>
            {recipe.recipe.label}
            {matchVeganHealthLabel ? (
              <Badge variant="solid" colorScheme="green" ml="2">
                <Text>Vegan</Text>
              </Badge>
            ) : null}
          </Heading>
          <Flex
            alignItems="baseline"
            gap="1"
            wrap="wrap"
            justifyContent="left"
            direction="row"
            w="100%"
          >
            {/* Displays the diet labels, if present */}
            {dietLabels.length > 0 ? (
              <>
                <Box w="100%" p="2" textAlign={'center'}>
                  <Heading size="xs" color={'gray.500'}>
                    Diet
                  </Heading>
                  {dietLabels.map((dietLabel, index) => (
                    <Tag
                      key={index}
                      colorScheme="gray"
                      variant={'subtle'}
                      size="sm"
                      mr="1"
                    >
                      {dietLabel}
                    </Tag>
                  ))}
                </Box>
              </>
            ) : null}
            {/* Displays the caution labels, if present */}
            {cautionLabels.length > 0 ? (
              <>
                <Box w="100%" p="2" textAlign={'center'}>
                  <Heading size="xs" color={'red.300'}>
                    Cautions
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
                </Box>
              </>
            ) : null}
            {/* Displays the meal types, if present */}
            {mealTypes.length > 0 ? (
              <>
                <Box w="100%" p="2" textAlign={'center'}>
                  <Heading size="xs">Meal type</Heading>
                  {mealTypes.map((mealType, index) => (
                    <Tag
                      key={index}
                      colorScheme="gray.50"
                      variant={'subtle'}
                      size="sm"
                      mr="1"
                    >
                      {mealType}
                    </Tag>
                  ))}
                </Box>
              </>
            ) : null}
          </Flex>
        </Box>
      </CardBody>
    </Card>
  );
};
