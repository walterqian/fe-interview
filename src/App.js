import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import PokemonList from './PokemonList';
import Header from './Header';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <PokemonList />
    </ChakraProvider>
  );
}

export default App;
