<div class="spinner">
  <span />
  <span />
  <span />
</div>

<style lang="scss">
  .spinner {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid var(--black300);
    background-color: var(--black100);
    position: relative;
  }

  span {
    display: inline-block;
    position: absolute;
    left: 26px;
    top: 14px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation-duration: 0.6s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    animation-delay: 200ms;
    animation-direction: alternate;
    animation-name: lazy;

    &:first-child {
      left: 14px;
      animation-delay: 100ms;
    }

    &:last-child {
      left: 38px;
      animation-delay: 300ms;
    }
  }

  @keyframes lazy {
    0% {
      transform: translateY(20px);
      opacity: 1;
      background-color: var(--black800);
    }
    100% {
      background-color: var(--black300);
      transform: translateY(0px);
      opacity: 1;
    }
  }
</style>
