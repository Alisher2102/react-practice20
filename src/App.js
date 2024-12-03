import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Quotes from "./pages/Quotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes"></Redirect>
      </Route>
      <Route path="/quotes" exact>
        <Quotes></Quotes>
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetails />
      </Route>
      <NewQuote />
      <Route path="/new-quote"></Route>
    </Switch>
  );
}

export default App;
