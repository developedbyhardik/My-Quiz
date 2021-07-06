<script>
    export let question;
    import {score} from '../store/Store.js'
    import {fade,fly} from 'svelte/transition'
    import {createEventDispatcher} from 'svelte'
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
            dispatch('next')
        }
    }

    const dispatch = createEventDispatcher();
</script>

    <div class="question-bg">
        <p class="category">Category:- {question.category}</p>
        <p>{@html question.question}</p>
        {#each allAnswers as answer}
        <button disabled={isAnswered} class={ isAnswered ? answer.correct:''} on:click={()=>checkAnswer(answer)}>{@html answer.answer}</button>
        {/each}
    </div>

    <style>

        .true{
            border-color: rgb(13, 196, 13);
        }
        .false{
            border-color: rgb(197, 17, 17);
        }
        .question-bg{
            border: var(--border);
            margin: 1.5rem 1rem;
            padding: 1rem;
            border-radius: var(--border-radius);
        }

        .category{
            font-size: 1rem;
            border: var(--border);
            margin: 0;
        }

        p{
            font-size: 1.2rem;
            padding: 0.4rem;
            margin: 1rem 0;
            border-radius: 5px;
            font-weight: bold;
            font-family: var(--bodyFont);
            
        }
    </style>