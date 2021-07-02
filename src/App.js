import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ListagemParticipante } from "./components/ListagemParticipante";
import { EditaParticipante } from "./components/EditaParticipante";
import { NovoParticipante } from "./components/NovoParticipante";

function App() {
  return (
    <BrowserRouter>
      <div className="w-100 bg-dark">
        <nav className="container navbar navbar-expand navbar-dark d-flex justify-content-center align-items-center">
          <h1 className="navbar-brand mt-2">Integrantes do leilão</h1>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/participantes" className="nav-link">
                Participantes
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/novo" className="nav-link">
                Novo Participante
              </Link>
            </li>
          </div>
        </nav>
      </div>

      <div className="container mt-3">
        <Switch>
          <Route
            exact
            path={["/", "/participantes"]}
            component={ListagemParticipante}
          />
          <Route exact path="/novo" component={NovoParticipante} />
          <Route path="/participantes/:id" component={EditaParticipante} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;