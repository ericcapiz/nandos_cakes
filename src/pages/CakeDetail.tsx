import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CakeState } from "../cakeState";
import { m } from "framer-motion";
import { pageAnimation } from "../animation";

interface Review {
  title: string;
  description: string;
}

interface Cake {
  title: string;
  mainImg: string;
  secondaryImg: string;
  url: string;
  reviews: Review[];
}

const CakeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cakes] = useState(CakeState());
  const [cake, setCake] = useState<Cake | null>(null);

  useEffect(() => {
    const currentCake = cakes.filter((stateCake) => stateCake.url === id)[0];
    if (currentCake) {
      setCake(currentCake);
    } else {
      navigate("/work");
    }
  }, [cakes, id, navigate]);

  return (
    <>
      {cake && (
        <m.div
          className="details"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="headline">
            <h2>{cake.title}</h2>
            <img src={cake.mainImg} alt="cake" />
          </div>
          <div className="reviews">
            {cake.reviews.map((review) => (
              <Review
                title={review.title}
                description={review.description}
                key={review.title}
              />
            ))}
          </div>
          <div className="image-display">
            <img src={cake.secondaryImg} alt="cake" />
          </div>
        </m.div>
      )}
    </>
  );
};

const Review = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="review">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default CakeDetail;
