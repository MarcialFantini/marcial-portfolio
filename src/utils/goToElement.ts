export const goToElement = (idElement: string) => {
  const element = document.getElementById(idElement);
  console.log(element);
  if (element) {
    scrollTo({ behavior: "smooth", top: element.offsetTop - 94 });
  }
};
