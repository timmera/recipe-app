import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
export const TextInput = ({ changeFn, ...props }) => {
  return (
    <>
      <Stack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="whitesmoke" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search your recipe..."
            onChange={changeFn}
            color={'whitesmoke'}
            {...props}
            sx={{ '::placeholder': { color: 'whitesmoke' } }}
          />
        </InputGroup>
      </Stack>
    </>
  );
};
