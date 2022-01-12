# Phase 1 Project: 

# Goals of application 

* Whiskey go go is a search app that allows users to type in their favorite alcohol and discover new cocktails that use the liqour in their search. 
* The application utilizes a public api of cocktails / liqours 
* When a user discovers a new drink they can add it to their cocktail library, with the 'add to library' button
* Once added to their library the user can that click on the cocktail to show them the ingrediants in the cocktail 
* The user can then choose if they want to remove the cocktail from their library

# Public API Used: 

https://www.thecocktaildb.com/api.php?ref=apilist.fun


# How to use application:

* Open index.html file in the broswer 
* Type in search bar the liqour of your choice 
* Select cocktails to add to your library using the 'add to library' button
*  Click on cocktails from your library for cocktail description, and to remove cocktail form library 

# How to interpret the code 

* The first function in the code is the fetch request 
    - This is where we are fetching the data from the api. 
    - This function will later be used as a callback function where the value of fetchrequest argument, is that of the search value. 
    - The argument being passed for the fetchRequst function is interpolated at the end of the api's url. 
    - Once we've converted that data into json format, we then use a callback function of searchAndRender.
    - The searchAndRender function takes the data form the search and renders it to the page 
    - 
    
    

