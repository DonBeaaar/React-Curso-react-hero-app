import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DcScreen } from "../dc/DcScreen";
import { HeroScreen } from "../heroes/HeroScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../serach/SearchScreen";
import { Navbar } from "../ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/hero/:heroID" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          {/* Si no encuentra */}
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
