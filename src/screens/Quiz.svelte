<script>
// Fetching Quiz Questions 

    import {
        amount,
        category,
        difficulty,
        type
    } from '../store/Store.js';

    const BASE_URL = 'https://opentdb.com/api.php?';
    const PARAMS = [$amount, $category, $difficulty, $type]

    let PARAMS_URL=null;

    PARAMS.map(param => {
        if (param.value != null) {
            PARAMS_URL = (PARAMS_URL==null) ? (`${param.title}=${param.value}`) :
            (PARAMS_URL + '&' +`${param.title}=${param.value}`)
        }
    })

    async function getQuizData() {
        const res = await fetch(BASE_URL + PARAMS_URL);
        const data = await res.json()
        return data.results;
    }

// Fetching Question Done 
    import Question from '../components/Question.svelte'
    import {score,resetAll} from '../store/Store.js'
    import Modal from '../components/Modal.svelte'
    let questions = getQuizData();
    let currentQuestion = 0;

    function nextQuestion(){
        currentQuestion = currentQuestion + 1;
    }


</script>

    <div>
        
        {#if (currentQuestion) == $amount.value}
            <Modal>
                <h3>Very Good You Completed The Quiz 🔥🔥</h3>
                <h2>Your Score : {$score}</h2>
                {#if $score < ($amount.value / 2)}
                   <h3>score doesn't matter you got knowledge that's matter</h3>
                {/if}
            </Modal>
            {:else}
            <div>
                {#await questions}
                    Loading...
                {:then data} 
    
                {#if data.length !=0}
                    <div>
                        <h3>#Question:{currentQuestion + 1}</h3>
                        <h3>My Score:{$score}</h3>
                    </div>
                    {#each data as question,i}
                        {#if currentQuestion===i}
                            <Question {question} {nextQuestion} />
                        {/if}
                    {/each}
                {:else}
                    <h2>We Have Not Sufficient Data Please Change The Category OR Choose Less Number Of Question</h2>
                {/if}
                {/await}
                <div>
                    <button on:click={resetAll}>Go Back</button>
                </div>
            </div>
        {/if}
        
    </div>
