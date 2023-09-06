import OverviewCards from "./OverviewCards";
import overviewData from "../data/overview-data.js";

const Overview = () => {
  const cardsList = overviewData.map(card =>
    <OverviewCards data={card} key={card.id}/>
  );

return (
  <section className="max-w-7xl mx-auto">
    <h2 className="font-bold text-dark-grayish-blue dark:text-white text-2xl">Overview - Today</h2>
    <ul className="py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cardsList}
    </ul>
  </section>
)
}

export default Overview;