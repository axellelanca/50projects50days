const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const rest = await fetch('https://icanhazdadjoke.com/', config);

    const data = await rest.json();
    jokeEl.innerHTML = data.joke;
}