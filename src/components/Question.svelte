<script>
    export let question;
    import {score} from '../store/Store.js'
    import {fade,fly,slide} from 'svelte/transition'
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

    <div class="question-bg" in:fly={{y:100,duration:500}}>
        <p class="category">Category:- {question.category}</p>
        <p>{@html question.question}</p>
        {#each allAnswers as answer}
        <button disabled={isAnswered} class={ isAnswered ? answer.correct:''} on:click={()=>checkAnswer(answer)}>{@html answer.answer}</button>
        {/each}
    </div>

    <style>

        .true{
            color:var(--font-color);
            border-color: #29e610;
        }
        .false{
            border-color: #e63f10;
        }
        .question-bg{
            border: var(--border);
            margin: 1.5rem 1rem;
            padding: 1rem;
            border-radius: var(--border-radius);
            background: var(--background);
        }

        .category{
            font-size: 1rem;
            border: var(--border);
            margin: 0;
            background: var(--main);
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