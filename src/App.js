import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Quotes from "./pages/Quotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import PageNotFound from "./pages/PageNotFound";
const DUMMY_DATA = [
  {
    id: "p1",
    author: "Alisher",
    text: "how to beat BORING state?",
  },
  {
    id: "p2",
    author: "Temir",
    text: "how to suck a COCK?",
  },
  {
    id: "p3",
    author: "Arsen",
    text: "how to be an IDIOT?",
  },
];
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes DUMMY_DATA={DUMMY_DATA} />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails DUMMY_DATA={DUMMY_DATA} />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
