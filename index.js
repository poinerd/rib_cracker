const getJoke = document.getElementById('get_joke')
const jokeQuestion = document.getElementById('joke_question')
const punchLine = document.getElementById('punch_line')
const category = document.getElementById('category')

const ERROR = "Sorry, we could'nt load a joke. Try again"

async function fetchJokes(){
    punchLine.style.display ='none'
    try{
        let response = await fetch("https://official-joke-api.appspot.com/random_joke")
        let jokes = await response.json();
 
        jokeQuestion.textContent = jokes.setup
        category.style.display='block'
        category.textContent = `Category: ${jokes.type}`

        setTimeout(() => {
            punchLine.style.display ='block'
            punchLine.textContent = jokes.punchline
            
        }, 2000);

        console.log(jokes)

    }
    catch{
        
        punchLine.textContent = ERROR
        console.error("opps, couldnt find the jokes")

    }
}

getJoke.addEventListener('click', fetchJokes)