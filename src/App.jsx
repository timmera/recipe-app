import { useState } from 'react';
import { RecipeItemPage } from './pages/RecipeItemPage';
import { Box, Heading } from '@chakra-ui/react';
import { RecipeSearch } from './components/RecipeSearch';
import './App.css';

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <Box h={'100%'}>
        <Box bgGradient="linear(to-r, blue.300, green.400, orange.200)">
          <div className="App">
            {selectedItem ? (
              <RecipeItemPage recipe={selectedItem} clickFn={setSelectedItem} />
            ) : (
              <>
                <Heading color="whitesmoke" m={'6'}>
                  My Recipe App
                </Heading>

                <RecipeSearch clickFn={setSelectedItem} />
              </>
            )}
          </div>
        </Box>
      </Box>
    </>
  );
};
