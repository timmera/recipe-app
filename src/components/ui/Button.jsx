import { Button as CButton } from '@chakra-ui/react';

export const Button = ({ text, clickFn, ...props }) => (
  <>
    <CButton colorScheme="teal" size="lg" onClick={clickFn} {...props}>
      {text}
    </CButton>
  </>
);
