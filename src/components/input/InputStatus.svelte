<script lang="ts">
  import { Status } from "../../models/types";
  export let status: Status = Status.DEFAULT;
</script>

<div
  class="input-status"
  class:has-error={status === Status.ERROR}
  class:is-pending={status === Status.PENDING}
  class:is-disabled={status === Status.DISABLED}
  class:has-success={status === Status.SUCCESS}
>
  <div class="input-status-hint"><slot name="hint" /></div>
  <div class="input-status-error"><slot name="has-error" /></div>
  <div class="input-status-successful"><slot name="was-successful" /></div>
  <div class="input-status-pending"><slot name="is-pending" /></div>
  <div class="input-status-disabled"><slot name="is-disabled" /></div>
</div>

<style lang="scss">
  @import "../../ui/media.scss";

  .input-status {
    position: relative;
    line-height: 1.3;
    margin: 4px 0 0 10px;
    font-size: 1.5rem;
    font-style: italic;
    color: var(--color-text-passive);
    height: 22px;
    overflow: visible;

    @include tablet {
      font-size: 1.7rem;
      height: 25px;
    }

    & > div {
      transition: opacity 300ms ease;
      opacity: 0;
    }

    .input-status-hint {
      opacity: 1;
    }

    .input-status-error,
    .input-status-successful,
    .input-status-pending,
    .input-status-disabled {
      position: absolute;
      top: 0;
      left: 0;
    }

    &.was-successful {
      .input-status-hint {
        opacity: 0;
      }
      .input-status-successful {
        opacity: 1;
      }
    }

    &.has-error {
      .input-status-hint {
        opacity: 0;
      }

      .input-status-error {
        opacity: 1;
      }
    }

    &.is-pending {
      .input-status-hint {
        opacity: 0;
      }

      .input-status-pending {
        opacity: 1;
      }
    }

    &.is-disabled {
      .input-status-hint {
        opacity: 0;
      }

      .input-status-disabled {
        opacity: 1;
      }
    }
  }
</style>
