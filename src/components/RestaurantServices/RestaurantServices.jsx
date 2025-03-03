import ExpandablePanel from "../ExpandablePanel/ExpandablePanel";
import servicesOptions from "./restaurantServicesOptions.json"
import PropTypes from "prop-types";

const RestaurantServices = ({ first }) => {
  const mealOptions = [
    ["Dinner service", "Unlimited buffet"],
    ["Wine tasting experience", "Dinner and live entertainment"],
  ];
  const imageOptions = [
    [
      "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740970223/00010-3179634693_regoza.png",
      "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740969786/00006-3702463459_drqvr9.png",
    ],
    [
      "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740968815/00000-4041137813_umz9xd.png",
      "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740969253/00002-4173029340_ed8j15.png",
    ],
  ];

  return (
    <>
      <section className="restaurant-services w-full h-screen bg-black flex flex-col sm:flex-row">
        <ExpandablePanel
          image={imageOptions[+!first][0]}
          isLeadPanel={true}
          text={mealOptions[+!first][0]}
          textId={1}
          panelContent={servicesOptions.texts[+!first][0]}
        />
        <span className="h-[1px] w-full sm:h-full sm:w-[1px] border-b sm:border-l border-white"></span>
        <ExpandablePanel
          image={imageOptions[+!first][1]}
          isLeadPanel={false}
          text={mealOptions[+!first][1]}
          textId={2} 
          panelContent={servicesOptions.texts[+!first][1]}
        />
      </section>
    </>
  );
};

export default RestaurantServices;

RestaurantServices.propTypes = {
  first: PropTypes.bool.isRequired,
};
