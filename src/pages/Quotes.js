import { Fragment } from "react";
import QuoteList from "../components/quotes/QuoteList";

const Quotes = (props) => {
  return (
    <Fragment>
      <QuoteList quotes={props.DUMMY_DATA} />
    </Fragment>
  );
};
export default Quotes;
