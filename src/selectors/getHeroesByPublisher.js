const { heroes } = require("../data/heroes");

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error("El heroe no es correcto");
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
