const SearchResult = ({ children, ...props }) => {
  return (
    <li className="searchResult" {...props}>
      ⇒ {children}
    </li>
  );
};

export default SearchResult;
