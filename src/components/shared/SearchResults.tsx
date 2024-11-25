
import { Models } from 'appwrite';
import { Loader } from 'lucide-react';
import GridPostList from './GridPostList';
// import GridPostList from './GridPostList';
// import GridPostList from './GridPostList';

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({ isSearchFetching, searchedPosts }:
     SearchResultsProps) => {

        if (isSearchFetching) return <Loader />;
        if (searchedPosts && searchedPosts.documents.length > 0) {
          return <GridPostList posts={searchedPosts.documents} />;
        }
  return (
    <p className="text-lg mt-10 text-center w-full">
    No results found
  </p>
  );
};

export default SearchResults;
