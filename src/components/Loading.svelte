

<div class="loading-bg">
    <div class="loading"></div>
</div>


<style>
    @keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading-bg{
  width: clamp(350px , 45vw , 600px);
    height: 550px;
    display: flex;
    align-items: center;
    
}

.loading {
  width: 6rem;
  height: 6rem;
  border: 5px solid var(--background);
  border-radius: 50%;
  border-top-color: var(--font-color);
  animation: spinner 0.6s linear infinite;
  margin: 0 auto;
}
</style>