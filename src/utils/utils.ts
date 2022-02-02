export const getScrollPage = (x = 0, y = 0) => (
  window.scrollTo({
    top: x,
    left: y,
  })
);
