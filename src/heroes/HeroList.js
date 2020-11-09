import React, { useMemo } from "react";
import PropType from "prop-types";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {

  const heroesPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroesPublisher.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroList.prototypes = {
  publisher: PropType.string.isRequired,
};
