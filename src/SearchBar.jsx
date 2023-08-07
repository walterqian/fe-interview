import * as React from 'react'
import { Input  } from '@chakra-ui/react'

function SearchBar() {
	const handleChange = ((event) => {
		console.log(event.target.value)
	})

	return (
		<Input placeholder={'Search Here'} onChange={handleChange}/>
	)
}

export default SearchBar
