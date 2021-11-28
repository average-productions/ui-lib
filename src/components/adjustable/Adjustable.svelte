<script lang="ts">
  import { beforeUpdate, afterUpdate, onMount, onDestroy } from "svelte";
  let elem;
  let hasMounted = false;
  let count = 0;
  let isAnimating = false;
  let nextElement = null;
  export let name;
  let prevName;

  // afterUpdate(async () => {
  //   hasMounted = true;
  // });

  console.log("name", name);
  console.log("prevName", prevName);

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
    console.log("mount");
    elem.addEventListener("transitionend", onTransitionEnd);
  });

  onDestroy(() => {
    elem.removeEventListener("transitionend", onTransitionEnd);
  });

  beforeUpdate(async () => {
    // console.log("adjustable update");
    // return;
    // console.log("elem", elem);
    // if (!hasMounted) {
    //   return;
    // }

    // console.log("fucker before update", $$slots);
    // console.log("current", current);
    // if (!current) {
    //   return;
    // }

    // console.log("hasMounted", hasMounted);

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

    count++;

    if (count < 2) {
      return;
    }

    isAnimating = true;
    const clonedElement = elem.firstChild.cloneNode(true);
    clonedElement.classList.add("prev-element");
    const height = `${elem.getBoundingClientRect().height}px`;
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

  :global(.adjustable > .prev-element) {
    // background-color: green;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    // opacity: 0.4;
  }
</style>
