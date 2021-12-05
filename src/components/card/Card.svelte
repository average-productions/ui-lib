<div class="card">
  <slot />
</div>

<style lang="scss">
  @import "../../ui/media.scss";

  .card {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1px solid var(--color-card-bg);
    background-color: var(--color-card-bg);
    border-radius: 10px;
    padding: 15px;

    @include landscape {
      padding: 20px 24px;
    }
  }
</style>
