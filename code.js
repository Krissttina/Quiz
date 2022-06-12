const que_text = document.querySelector(".que_text");

function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class = "option"' + questions[index].options[0] + '<span></span></div>';
                    + '<div class = "option"' + questions[index].options[1] + '<span></span></div>';
                    + '<div class = "option"' + questions[index].options[2] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; option.lenght; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function answerSelected(answer){
    let userAns = answer.textContent;
    let correctAns = "Hyper Text Markup Language";
    let allOptions = option_list.children.lenght;

    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Answer is correct!");
    }else{
        answer.classList.add("wrong");
        console.log("Answer is wrong!");
    }

    for(let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled")
    }
}