import InputWithLabel from "./InputWithLabel";
import "./SearchForm.css";

const SearchForm = ({ onSearchInput, onSearchSubmit, searchTerm }) => (
	<form onSubmit={onSearchSubmit}
		<InputWithLabel
			id="search"
			value{searchTerm}
			onInputChange={onSearchInput}
			type="text"
		>
			<strong>Search For Stories</strong>
		</InputWithLabel>
		<button className="button" disabled={!searchTerm} type="submit">
			Submit
		</button>
	</form>
);

export default SearchForm;