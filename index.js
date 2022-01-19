let cocktailLibrary = []


function fetchRequest(typeOfLiqour){
fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${typeOfLiqour}`)
.then(r => r.json())
.then(data => (console.log(data), searchAndRender(data.drinks) ))
}


function searchAndRender(data) {

   let cardContainer = document.querySelector('#cockTail-container')

   cardContainer.innerHTML = ""
    data.forEach(drink => {


        let div3 = document.createElement('div')
        div3.className = 'card'

        let drinkImage = document.createElement('img')
        drinkImage.src = drink.strDrinkThumb
        drinkImage.className = 'drink-image'

        let drinkName = document.createElement('h4')
        drinkName.textContent = drink.strDrink

        let button = document.createElement('button')
        button.textContent = 'Add to library'

        cardContainer.appendChild(div3)

        div3.appendChild(drinkName) 
        div3.appendChild(drinkImage)
        div3.appendChild(button)

      
        button.addEventListener('click', e => {

            cocktailLibrary.push(drink)
            
            libraryRender(cocktailLibrary)



        })
    })

}

function renderLibraryCard(drink) {

    let cardContainer = document.querySelector('#cockTail-container')

    cardContainer.innerHTML = ""

    let div3 = document.createElement('div')
    div3.className = 'library-card'

    let drinkImage = document.createElement('img')
    drinkImage.src = drink.strDrinkThumb
    drinkImage.className = 'library-drink-image'

    let drinkName = document.createElement('h4')
    drinkName.textContent = drink.strDrink

    let ingredientsData = []
    for (let i = 1; i < 15; i++) {
        let str = drink['strIngredient' + i]
        if(str != null){
            ingredientsData.push(str)
        }
    }

    let ingredients = document.createElement('p')
    ingredients.textContent = ingredientsData.join(", ")

    

    let button = document.createElement('button')
    button.id = drink.idDrink
    button.textContent = 'Remove from library'
    

    cardContainer.appendChild(div3)

    div3.appendChild(drinkName) 
    div3.appendChild(drinkImage)
    div3.appendChild(ingredients)
    div3.appendChild(button)

    console.log(drink.strDrink)
 
    button.addEventListener('click', e => {
        
        let newCocktailLibrary = cocktailLibrary.filter(drink => drink.idDrink != e.target.id)
        
        libraryRender(newCocktailLibrary)
    })
     
 
 }
 

//add to library
function libraryRender(drinkLibrary) {
    

    let libraryDiv = document.querySelector('#cocktail-library')
    libraryDiv.innerHTML = ""
    drinkLibrary.forEach(drink => {

        let drinkImage = document.createElement('img')
        drinkImage.className = 'library-drinks'
        drinkImage.src = drink.strDrinkThumb

        libraryDiv.appendChild(drinkImage);

        drinkImage.addEventListener('click', e => {
            renderLibraryCard(drink)
        })
     
    })

}


function searchButton() {
    const submitForm = document.getElementById('cocktail-form')
    submitForm.addEventListener('submit', e => {
        e.preventDefault()
        let searchInput = document.querySelector('#search')
        
        fetchRequest(searchInput.value);

    })
}


//Dom Content Loaded 
document.addEventListener('DOMContentLoaded', () => {
    // fetchRequest()
    searchButton();
    
    console.log(cocktailLibrary)

})