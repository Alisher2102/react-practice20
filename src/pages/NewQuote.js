import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quotes");
  };
  return (
    <div>
      <h1>New Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
    </div>
  );
};
export default NewQuote;
