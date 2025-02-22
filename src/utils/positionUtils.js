export const getContainerMiddle = (id) => {
  return document.getElementById(id)?.offsetHeight / 2 || 0;
};

export const getTrackPosition = (id) => {
  return Math.floor(
    document.getElementById(id)?.getBoundingClientRect().y / 2 || 0
  );
};
