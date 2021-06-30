<script>
    export let question;
    export let nextQuestion;
    import {score} from '../store/Store.js'
    let isAnswered = false;
    let isCorrect;

    const incorrectAnswers = question.incorrect_answers.map(answer => {
        return {
            answer,
            correct: false
        }
    });
    const correctAnswer = question.correct_answer;

    const allAnswers = [...incorrectAnswers, {
        answer: correctAnswer,
        correct: true
    }]

    function suffle(answers) {
        answers.sort(() => Math.random() - 0.5)
    }

    suffle(allAnswers)

    function checkAnswer(answer) {
        if (!isAnswered) {
            if (answer.correct) {
                isCorrect = true;
                score.update(prev => prev + 1)
            }
            isAnswered = true;
        }
    }
</script>

    <div>
        <div>
            <h3>Category: {question.category}</h3>
        </div>
        {#if isAnswered}
            <h4>
                {#if isCorrect}
                    You Got Right One 🔥
                    {:else}
                    You Goofed Up 😢
                {/if}
            </h4>
        {/if}
        <h2>{@html question.question}</h2>
        {#each allAnswers as answer}
        <button disabled={isAnswered} on:click={()=>checkAnswer(answer)}>{@html answer.answer}</button>
        {/each}
        {#if isAnswered}
            <button on:click={nextQuestion} >Next Question</button>
        {/if}
    </div>
