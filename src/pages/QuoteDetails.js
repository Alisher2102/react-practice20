import { Fragment } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const QuoteDetails = (props) => {
  const params = useParams();
  const quote = props.DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <Fragment>
      <h1>Quote detail page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetails;
