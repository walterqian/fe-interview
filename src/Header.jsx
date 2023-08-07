import * as React from 'react'
import {  Image, Flex } from '@chakra-ui/react';

function Header() {
	return (
		<Flex
			w="100%"
			px="6"
			py="5"
			align="center"
			justify="space-between"
		>
			<Image src={'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'} h="50px" />
		</Flex>
	)
}

export default Header
