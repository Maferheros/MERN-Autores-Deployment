import './App.css';
import NewAutor from './Componentes/NewAutor/NewAutor';
import DashboardAutor from './Componentes/DashboardAutor/DashboardAutor';
import EditAutor from './Componentes/EditAutor/EditAutor'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <h1>Favorite authors</h1>
      <Switch>
        <Route path = "//" render = { (routeProps) => <DashboardAutor {...routeProps}/>}/>
        <Route path = "/new" render = { (routeProps) => <NewAutor {...routeProps} />}/>
        <Route path = "/:id/edit" render = { (routeProps) => <EditAutor {...routeProps} />}/>
      </Switch>
     </BrowserRouter>
  );
}

export default App;
