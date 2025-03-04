export const getMidPositionPixels = (id) => {
  return document.getElementById(id)?.offsetHeight / 2 || 0;
};

export const getContainePositionFromTop = (id) => {
  const container = document.getElementById(id);

  if (!container) return null;

  let topPos = container.offsetTop;
  let elementOnTop = container.offsetParent;
  while (elementOnTop) {
    topPos += elementOnTop.offsetTop;
    elementOnTop = elementOnTop.offsetParent;
  }
  return topPos;
};

export const getRelativeContainerMiddle = (id) => {
  return getContainePositionFromTop(id) + getMidPositionPixels(id);
};

export const getTrackPosition = (id) => {
  return Math.floor(
    document.getElementById(id)?.getBoundingClientRect().y / 2 || 0
  );
};
