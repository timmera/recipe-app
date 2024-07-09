import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';
import { Box } from '@chakra-ui/react';
import './App.css';

export const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  return (
    <>
      <Box bgGradient="linear(to-r, blue.300, green.400, orange.200)">
        <div className="App">
          {selectedItem ? (
            <h2>subpagina</h2>
          ) : (
            <>
              <RecipeListPage clickFn={setSelectedItem} />
            </>
          )}
        </div>
      </Box>
    </>
  );
};
