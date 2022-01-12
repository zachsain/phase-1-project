# Phase 1 Project: 

# Goals of application 

* Whiskey go go is a search app that allows users to search their favorite alcohol and discover new cocktails. 
* The application utilizes a public api of cocktails / liqours.
* When a user discovers a new drink they can add it to their cocktail library, with the 'add to library' button.
* Once added to their library the user can that click on a cocktail to view the ingredients or remove the cocktail from their library.  

# Public API Used: 

https://www.thecocktaildb.com/api.php?ref=apilist.fun


# How to use application:

* Open index.html file in the broswer.
* Type in search bar the liqour of your choice. 
* Select cocktails to add to your library using the 'add to library' button.
*  Click on cocktails from your library for cocktail ingredients, and to remove cocktail form library.

# How to interpret the code:

* The fetchRequst Function 

    - This is where we are fetching the data from the api. 
    - This function will later be used as a callback function where the value of fetchrequest argument, is that of the search value. 
    - The argument being passed for the fetchRequst function is interpolated at the end of the api's url. 
    - Once we've converted that data into json format, we then use a callback function of searchAndRender.

* The searchAndRender Function 

    - The searchAndRender function takes the data form the search and renders it to the page.
    - searchAndRender uses a callback in the button event listener to call libraryRender which takes an argument of cocktailLibrary (found at the top of the page).

* The libraryRender Function: 
    - This function takes the drink card that has had the add to library button clicked and renders them to the library div on the page.
    - Once a cocktail image has been added to the cocktail library an event listener is added to detect when a user clicks on a drink image. 
    - Once a user clicks that image renderLibraryCard is then called with the argument passed of the drink that was clicked. 

* The renderLibraryCard Function 
    - The renderLibrary Function does the exact same thing as the searchAndRender function with some small tweaks.
    - It renders a bigger card in the middle of the page with the drinks image. name, ingredients, and a button to remove that drink from the library. 

    
    

