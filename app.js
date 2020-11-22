const answers = ["C", "B", "A", "C"];
const form = document.querySelector(".quiz-form");
const result= document.querySelector(".result")

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    userAnswers.forEach((answer, index) => {
        if(answer === answers[index]){
            score+=(1 / answers.length) * 100;
        }
    });

    scrollTo(0, 0);

    result.classList.remove('d-none');
    
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output == score){
            clearInterval(timer);
        }
        output++;
    }, 10);

});
