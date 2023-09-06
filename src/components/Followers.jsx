import FollowersCard from "./FollowersCard";
import followersData from "../data/followers-data.js";

const Followers = () => {

    const cardsList = followersData.map(card =>
        <FollowersCard data={card} key={card.id}/>
      );

    return (
        <section className="max-w-7xl mx-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {cardsList}
        </section>
    )
}

export default Followers;