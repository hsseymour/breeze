const SearchResult = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};

export default SearchResult;
