<div class="text-skeleton">
  <div class="bar" />
  <div class="bar" />
  <div class="bar" />
  <div class="bar" />
  <!-- <div class="skeleton-marker" /> -->
</div>

<style lang="scss">
  @import "../../ui/media.scss";

  .text-skeleton {
    position: relative;
  }

  .bar {
    overflow: hidden;
    background-color: var(--color-input-border);
    margin: 0 0 7px 0;
    border-radius: 10px;
    height: 13px;
    position: relative;

    @include landscape {
      margin: 0 0 11px 0;
      height: 12px;
    }

    &:nth-child(3) {
      width: 90%;
    }

    &:nth-child(4) {
      width: 80%;
    }
  }

  .bar::before {
    content: "";
    position: absolute;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    width: 50%;
    height: 100%;
    top: 0;
    left: 0;
    animation: loading 2s infinite;
  }

  // .skeleton-marker {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   height: 100%;
  //   width: 5px;
  //   background-color: var(--color-white);
  //   box-shadow: 0 0 20px 0 #fff;
  //   box-shadow: 0 0 40px 20px #fff;
  //   animation: loading 1s infinite;
  // }

  @keyframes loading {
    0% {
      transform: skewX(-10deg) translateX(-100%);
      // left: -10%;
    }
    100% {
      transform: skewX(-10deg) translateX(200%);
      // left: 110%;
    }
  }
</style>
