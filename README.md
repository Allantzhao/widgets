**This application is deployed! Check it out here: https://widgets-two-rouge.vercel.app**


This widgets app was generated from create-react-app and built using purely functional components with react hoooks.

There are four widgets built out with a navigation header that has custom built routing (no React-router) to navigate between the widgets.

Below is a description of each widget:

1. Accordion
- an accordion with a hardcoded list of options
- initially renders with nothing expanded
- clicking any of the options will expand the selected option and unexpand previously selected option (if there was one)

2. Search
- search built using wikipedia api
- makes requests and displays list of articles as the user types into the input field
- debouncing (1/2 second delay) implemented to reduce amount of api requests made

3. Dropdown
- reusable dropdown component with customized text as the label of the dropdown and dynamic options to display
- defaults selected value to first object passed through in options list
- clicking anywhere on the page when dropdown is expanded will close the dropdown

4. Translate
- Uses google translate api to translate english to selected language (from dropdown component above)
- translating occurs as user types into the input field
- debouncing (700 ms delay) implemented to reduce amount of api requests made
