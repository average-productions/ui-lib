export default function adjustable(node, params) {
  const defaultParams = {
    open: true,
    duration: 0.2,
    easing: "ease",
  };

  const internalParams = Object.assign(defaultParams, params);

  async function enter() {
    console.log("enter");
  }

  async function leave() {
    console.log("leave", leave);
  }

  function update(newParams) {
    params = Object.assign(internalParams, newParams);
    params.open ? enter() : leave();
  }

  return { update };
}
