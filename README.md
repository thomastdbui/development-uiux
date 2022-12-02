# Development

### Link to Deployed Website
`https://tiredcoder714.github.io/development-uiux/`

### Goal and Value of the Application
This web application is created in helping you catlog and choose your favorite dishes and drinks
at Brown. You can sort on the location relative to campus, along with selecting between food
and drink. Additionally, you can sort based on the satisfaction level, both from high->low and 
low-> high. There is a favorites list for users so that users can create a catalog of their 
personal favorites. 

### Usability Principles Considered
Usability Principles were considered while creating this react app. For one, all of the cards 
containing the consumables are the same in shape and form, along with having identical buttons. 
There is also blue add to favorites button and a red remove from favorites button. Red was selected
as most users already understand that red = remove. Even more, the navigational bar is tucked to the side, 
to the right as most users are also used to filtering and sorting based on the right (like Amazon). The titles
for filter categories, sort categories, as well as the favorites list are all bolded and larger size, while the 
possible options for selection are highlighted with the Nav Pill. Thus, users can easily see the important 
information along with understanding how to access and interact with the web app

### Organization of Components
In addition to the App, there are two other components. The first one is the Consumable
component which is responsible for every individual data piece in the consumable json. 
Eseentially, the consumable component is a card, with buttons that change the state of
the favorite, so it can interact what is shown in the list. Furthermore, there is a Sidebar 
component that houses the entire sidebar, from the filters to sorting to aggregating. These
too function by manipulating the states and displaying data based on the states. 


### How Data is Passed Down Through Components
Data is primarily passed down through components as props. There are props for the state
variables and the state variable setter, along with more specific data such as the item's name, 
items' total etc. inside the Consumable component. Essentially, the necessary states and data are passed
into the component when it is initialized, and it changes the state using the functions passed in. 


### How the User Triggers State Changes

The user can trigger state changes by clicking the desired button. For every consumable component, there is a button
that can add or remove to the favorites list. It does this by taking the current favorites list along with the setFavorites
state changer, and implements the logic as such. In essence, the state variables are all created in the app, and those same 
variables and their setters are passed into any component that needs it. These components then change the state variables, and 
displays the changes accordingly. 

