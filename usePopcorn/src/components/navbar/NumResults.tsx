type NumResultsProps = {
  movieCount: number;
};

function NumResults({ movieCount }: NumResultsProps) {
  return (
    <p className="num-results">
      Found <strong>{movieCount}</strong> results
    </p>
  );
}

export default NumResults;
