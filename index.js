const express = require('express');
const app = express();

const collection = `{
    "Classic": ["strawberry", "banana", "pineapple", "mango", "peach", "honey", "ice", "yogurt"],
    "Forest Berry": ["strawberry", "raspberry", "blueberry", "honey", "ice", "yogurt"],
    "Freezie": ["blackberry", "blueberry", "black currant", "grape juice", "frozen yogurt"],
    "Greenie": ["green apple", "kiwi", "lime", "avocado", "spinach", "ice", "apple juice"],
    "Vegan Delite": ["strawberry", "passion fruit", "pineapple", "mango", "peach", "ice", "soy milk"],
    "Just Desserts": ["banana", "ice cream", "chocolate", "peanut", "cherry"]
   }
   `;

app.get('/ingredients', (req, res) => {
    res.send(collection);
})

app.get('/instructions', (req, res) => {
    res.send(`<style>* { font-size: 0.95rem} h1 { font-size: 2rem;} body, html { width: 100%; height: 100%} body {display: flex; flex-direction: column; justify-content: center; align-items: center;}</style>
    <h1> Test Instructions </h1>
    <div style="max-width: 50%; padding: 2rem;">Create a function that receives a string and represents the name of a Smoothie, plus additionals or decrements for that smoothie like so: Classic,+chocolate,-strawberry and returns an array of strings with the ingredients of a given smoothie
    <pre>{
     "Classic": ["strawberry", "banana", "pineapple", "mango", "peach", "honey", "ice", "yogurt"],
     "Forest Berry": ["strawberry", "raspberry", "blueberry", "honey", "ice", "yogurt"],
     "Freezie": ["blackberry", "blueberry", "black currant", "grape juice", "frozen yogurt"],
     "Greenie": ["green apple", "kiwi", "lime", "avocado", "spinach", "ice", "apple juice"],
     "Vegan Delite": ["strawberry", "passion fruit", "pineapple", "mango", "peach", "ice", "soy milk"],
     "Just Desserts": ["banana", "ice cream", "chocolate", "peanut", "cherry"]
    }</pre>
    </div>
    <div><b>it 'create "Classic" plus "chocolate'</b></br>
"Given" "Classic,+chocolate" "shouldBe" ["banana", "chocolate","honey","ice","mango","peach","pineapple","strawberry", "yogurt"]</br></br>
   
<b>it 'create "Classic" plus "chocolate" minus "strawberry"'</b></br>
"Given" "Classic,+chocolate,-strawberry" "shouldBe" ["banana", "chocolate","honey","ice","mango","peach","pineapple","yogurt"]</br></br>

<b>it 'create "Classic" smoothie'</b></br>
"Given" "Classic" "shouldBe" ["banana","honey","ice","mango","peach","pineapple","strawberry","yogurt"]</br></br>

<b>it 'create "Classic" minus "strawberry"'</b></br>
"Given" "Classic,-strawberry" "shouldBe" ["banana","honey","ice","mango","peach","pineapple","yogurt"]</br></br>

<b>it 'create "Just Desserts" smoothie'</b></br>
"Given" "Just Desserts" "shouldBe" ["banana","cherry","chocolate","ice cream","peanut"]</br></br>

<b>it 'create "Just Desserts" smoothie without "ice cream" and "peanut"'</b></br>
"Given" "Just Desserts,-ice cream,-peanut" "shouldBe" ["banana","cherry","chocolate"]</br></br>

<b>it 'create a smoothie without ingredients'</b></br>
"Given" "Just Desserts,-banana,-cherry,-chocolate,-ice cream,-peanut" "shouldBe" []</br></br>

<b>it 'exclude unused ingredients'</b></br>
"Given" "Classic,-banana,-mango,-peanut" "shouldBe" ["honey","ice","peach","pineapple","strawberry","yogurt"]</br></div>`);
})

app.get('/', (req, res) => {

res.send('<a href="/instructions"> Instructions </a><br><br><a href="/ingredients"> Ingredients </a>')
});

const port = 3021;

app.listen(port, () => {
    console.log(`Running on ${port} port`)
})

