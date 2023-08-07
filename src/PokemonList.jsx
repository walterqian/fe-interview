import * as React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import SearchBar from './SearchBar'

function PokemonList() {
	const [pokemon, setPokemon] = React.useState([])

	React.useEffect(() => {
		async function getPokemon() {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
			).then((response) => response.json());
			setPokemon(response['results'])
		}

		getPokemon()
	}, [])

	return (
		<TableContainer p={6}>
			<Table variant={'simple'}>
				<Thead>
					<Tr>
						<Th>Pokemon Name</Th>
						<Th>
							<SearchBar />
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{pokemon.map((item) => (
						<Tr>
							<Td>
								{item['name'].toUpperCase()}
							</Td>
							<Td />
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default PokemonList
