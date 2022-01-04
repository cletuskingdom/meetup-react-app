import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourite-content";

function FavouritesPage() {
  const favouristeCtx = useContext(FavouritesContext);

  let content;

  if (favouristeCtx.totalFavourites === 0) {
    content = <p>You got no favourites yet, start adding some.</p>;
  } else {
    content = <MeetupList meetups={favouristeCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavouritesPage;
