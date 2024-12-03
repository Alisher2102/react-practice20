import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";
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
const Quotes = () => {
  return (
    <Fragment>
      <QuoteList quotes={DUMMY_DATA} />
    </Fragment>
  );
};
export default Quotes;
