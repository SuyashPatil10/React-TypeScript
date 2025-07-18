import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.tsx'
import StarRating from "./components/StarRating.tsx";

export function Test() {
  const [movieRating, setMovieRating] = useState<number>(0);
  return (
    <div>
      <StarRating
        maxRating={10}
        color="blue"
        size={36}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "okay", "good", "amazing"]}
      defaultRating={3}
    />
    <StarRating color="red" size={24} />
    <Test />
  </StrictMode>
);
