submit_btn = document.getElementById("btn");
input_text = document.getElementById("input");
answer = document.getElementById("answer");
text = document.getElementById("text");
Input = document.getElementById("Input");
box1 = document.getElementById("box");
reset = document.getElementById("reset");

box1.style.display = 'none';
Input.style.display = 'block';

submit_btn.addEventListener("click" ,() => {
    getLanguage();
})

reset.addEventListener("click" ,() => {
    box1.style.display = 'none';
    Input.style.display = 'block';
})


input_text.addEventListener("keydown" ,(e) => {
    if (e.target.value && e.key == 'Enter'){
        getLanguage()
    }
});

function getLanguage() {
    $.ajax({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/textlanguage?text=${input_text.value}`,
        headers: { 'X-Api-Key': '<API_KEY>'},
        contentType: 'application/json',
        success: function(result) {
            Input.style.display = 'none';
            box1.style.display = 'block';
            console.log(result.language);
            text.innerText = input_text.value;
            answer.innerText = result.language;
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}