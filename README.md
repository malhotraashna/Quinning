# My Launches

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the required dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

## Implementation

This is a Recat application which displayes a world map and pins down coordinates for Launches happening from the start date for 3 months. When clicked on any point, description is displayed below.

- By default, filters are applied for start date to Today and end date to Today+3 months.
- Filter is provided with date picker for the user to be able to select dates and filter.
- Map is shown with coordinates pointed on the basis of launch pad longitude and latitude.
- Clicking on any point gives some description of the launch below the map.

Currently the request is handled only for the first 10 records.
Loader is displayed when waiting for response.

### Architecture

I've tried to have a modular directory structure so that anybody is easily able to identify the different elements. All code resides in `src` directory.

Within `src` we have following directories:

- `components`: It has folder for each component that we have created. Within each component folder, we have its respective tsx, css and test file. For a bigger project, we can have divide the components within multiple modules.

- `actions`: Any user event handling logic involving state update should reside in this directory. These actions are called from components. Actions can be divided into modules for a bigger project.

- `context`: Creation of context instance is separated in this directory. State management is handled using context.

- `reducers`: State update logic is handled in reducers. Reducer is a pure function and is solely responsible for updating the state. No computation is handled by them.

- `services`: Logic related to calling target api and fetching the relevant data is handled by services.

Segregation of these modules help make the application maintainable and degugging is easier.

### Technical Implementation

Used following libraries for the implementation:

- `d3-geo` — used d3-geo for geographic projections (drawing the map) 
- `topojson-client` — a client to manipulate TopoJSON. TopoJSON is the library that provides the map of the world, which I can use to draw the map. 
- `geojson` — format for encoding geographic data 

The above libraries and their types have been used for map creation.

- `react-loading-overlay-ts` - used to display the loading icon when waiting for response.

- `react-date-picker` - used to show date picker component for the start and end date filters

- `axios` - used to make server requests

### Improvements

- Installed globe with animations for plotting
- Currently handled request for first 10 records only, would have scaled it for other remaining values.
- Could have handled cases for same longitude and latitude.
- Could have used caching mechanisms. Would have implemented methods better using useCallbacks.
- Made better CSS and UX
- Could have implemented filters for agency and status of launch
- Could have highlighted first launch
- Better and clean code with comments
- Wrote limited tests, would have extended to all possible use cases and user interactions
- Added Error Boundary, would have handled it in more user friendly way
- Maybe better documentation too.