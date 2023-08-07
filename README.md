# Argus FE Interview

The goal of this interview is to expand on this simple app by implementing some key functionality.
It's a collaborative exercise so let's work together and of course feel free to use Google or any other resources at your disposal.

## Getting started.

In the project directory, you can run:

### `npm install`

Install the packages required for this app (Create React App + Chakra UI).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Implementation

For the next few items focus on functionality over styling.
Currently this app uses the Chakra-UI library but feel free to use any UI.

### Loading Icon

Currently the table flashes on initial load. Let's get a loading spinner displayed before we load the data.

### Pokemon Generation Filtering

A lot of users want to filter by the generation of Pokemon. Create some UI to filter by GEN I, II, and III.
The mappings of the generations to IDs are:
1. I -> 1 - 151
2. II -> 152 - 251
3. III -> 252 -> 386

### Working Search

Get the search bar in the table working so we can filter by Pokemon names.

### Pagination

Currently we only load all Pokemon. We want to be able to go forward/backward on different pages of Pokemon.
