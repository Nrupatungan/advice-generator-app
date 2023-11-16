const advice_num = document.querySelector('#advice-num')
const advice_text = document.querySelector('#advice')
const generate_btn = document.querySelector("#btn")

const advice_Fetch = async () => {
    const API_Request = new Request(`https://api.adviceslip.com/advice`)

    const fetch_Response = await fetch(API_Request)

    const advice = await fetch_Response.json()

    console.log(advice)

    populate_id(advice.slip);
    populate_advice(advice.slip);
}

function populate_id(obj){
    advice_num.textContent = obj.id
}

function populate_advice(obj){
    advice_text.textContent = obj.advice
}

window.addEventListener('load', advice_Fetch)

generate_btn.addEventListener('click', advice_Fetch)