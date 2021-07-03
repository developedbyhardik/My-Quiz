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
    import Loading from '../components/Loading.svelte'
    let questions = getQuizData();
    let currentQuestion = 0;
    let isNext = false;

    function nextQuestion(){
        currentQuestion = currentQuestion + 1;
        isNext = false;
    }


</script>

    <div class="quiz">
        {#if (currentQuestion) == $amount.value}
            <Modal>
                <p>Very Good You Completed The Quiz 🔥</p>
                <p>Your Score : {$score}</p>
                {#if $score < ($amount.value / 2)}
                   <p>score doesn't matter you got knowledge that's matter</p>
                {/if}
            </Modal>
            {:else}
            <div>
                {#await questions}
                    <Loading/>
                {:then data} 
                    {#if data.length !=0}
                        <div class="score">
                            <h4>Question: <span >{currentQuestion + 1}</span> </h4>
                            <h4>My Score: <span >{$score}</span> </h4>
                        </div>
                        {#each data as question,i}
                            {#if currentQuestion===i}
                            <div class="animation" >
                                <Question {question} on:next={()=>isNext=true } />
                            </div>
                            {/if}
                        {/each}
                    {:else}
                    <h2>We Have Not Sufficient Data Please Change The Category OR Choose Less Number Of Question</h2>
                {/if}
                <div class="nav-button">
                    <button class="setting" on:click={resetAll}><img src="/Assets/setting.svg" alt="Settings"></button>

                    <button class="setting" disabled={!isNext}  on:click={isNext ? nextQuestion : null }><img src="/Assets/start.svg" alt="Next Que"></button>
                </div>
                {/await}
            </div>
        {/if}
        
    </div>


    <style>

        .nav-button{
            display: flex;
            justify-content: space-evenly;
        }
        .setting{
            width: 3rem;
            border: none;
            margin: 1rem;
        }

        .score{
            margin-top: 1rem;
            justify-content: space-evenly;
            display: flex;
                }
            h4{
                font-size: 1.2rem;
                padding: 0.4rem;
                margin: 0;
                border-radius: 5px;
                font-weight: bold;
                font-family: var(--bodyFont);
                border: var(--border);
            }
            span{
                padding: 0.25rem 0.6rem;
                border-radius: 50%;
                border: var(--border);
            }
    
    </style>
