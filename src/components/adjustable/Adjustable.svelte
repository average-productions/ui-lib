<script lang="ts">
  import { beforeUpdate, afterUpdate, onMount, onDestroy } from "svelte";
  export let name;
  let isAnimating = true;
  let elem;
  let prevName;

  async function nextFrame() {
    return new Promise(requestAnimationFrame);
  }

  const onTransitionEnd = async (ev) => {
    const target = ev.currentTarget;
    if (!target.classList.contains("adjustable")) {
      return;
    }

    if (ev.propertyName === "opacity") {
      if ("0" === elem.style.opacity) {
        elem.classList.remove("invisible");
        elem.lastChild.remove();
        await nextFrame();
        elem.style.height = `${elem.firstChild.scrollHeight}px`;
      } else {
        isAnimating = false;
      }
    }

    if (ev.propertyName === "height") {
      elem.style.height = "auto";
      elem.style.overflow = "visible";
      elem.style.opacity = 1;
    }
  };

  onMount(() => {
    elem.addEventListener("transitionend", onTransitionEnd);
    isAnimating = false;
    prevName = name;
  });

  onDestroy(() => {
    elem.removeEventListener("transitionend", onTransitionEnd);
  });

  beforeUpdate(async () => {
    if (isAnimating) {
      return;
    }

    if (!elem) {
      return;
    }

    if (prevName === name) {
      return;
    }

    prevName = name;
    isAnimating = true;
    const clonedElement = elem.firstChild.cloneNode(true);
    clonedElement.classList.add("prev-element");
    const height = `${elem.getBoundingClientRect().height}px`;
    elem.classList.add("invisible");
    elem.style.height = height;
    elem.style.overflow = "hidden";
    elem.appendChild(clonedElement);
    await nextFrame();
    elem.style.opacity = 0;
  });
</script>

<div class="adjustable" bind:this={elem}>
  <div>
    <slot />
  </div>
</div>

<style lang="scss">
  .adjustable {
    position: relative;
    transition: opacity 500ms ease, height 300ms ease;
  }

  :global(.invisible > div:first-child) {
    opacity: 0;
  }

  :global(.adjustable > .prev-element) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
</style>
