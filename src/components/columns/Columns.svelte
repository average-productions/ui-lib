<script>
  export let media = "mobile";
</script>

<div class={`columns ${media}`}>
  <slot />
</div>

<style lang="scss">
  @import "../../ui/media.scss";

  @mixin flex-props {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  :global(.columns > div) {
    flex: 1 0 calc(50% - 10px);

    @include tablet {
      flex: 1 0 calc(50% - 25px);
    }
  }

  :global(.columns.mobile > div) {
    max-width: calc(50% - 10px);
  }

  :global(.columns.landscape > div) {
    @include landscape {
      max-width: calc(50% - 10px);
    }
  }

  :global(.columns.tablet > div) {
    @include tablet {
      max-width: calc(50% - 25px);
    }
  }

  :global(.columns.desktop > div) {
    @include desktop {
      max-width: calc(50% - 25px);
    }
  }

  :global(.columns.desktop-plus > div) {
    @include desktop-plus {
      max-width: calc(50% - 25px);
    }
  }

  :global(.columns.wide > div) {
    @include wide {
      max-width: calc(50% - 25px);
    }
  }

  :global(.columns > .full, .columns.landscape > .full, .columns.tablet
      > .full, .columns.desktop > .full, .columns.desktop-plus
      > .full, .columns.wide > .full, .columns.super > .full, ) {
    flex: 1 0 100%;
    max-width: 100%;
  }

  .columns {
    &.mobile {
      @include flex-props;
    }

    &.landscape {
      @include landscape {
        @include flex-props;
      }
    }

    &.tablet {
      @include tablet {
        @include flex-props;
      }
    }

    &.desktop {
      @include desktop {
        @include flex-props;
      }
    }

    &.desktop-plus {
      @include desktop-plus {
        @include flex-props;
      }
    }

    &.wide {
      @include wide {
        @include flex-props;
      }
    }
  }
</style>
