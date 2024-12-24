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

interface ReviewProps {
  title: string;
  description: string;
}

const CakeDetail = () => {
  const { id } = useParams();
  const [cakes] = useState<Cake[]>(CakeState);
  const [cake, setCake] = useState<Cake | null>(null);

  useEffect(() => {
    const currentCake = cakes.find((stateCake) => stateCake.url === id);
    if (currentCake) {
      setCake(currentCake);
    }
  }, [cakes, id]);

  return (
    <m.div
      className="details"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      layoutId={id}
    >
      {cake && (
        <>
          <div className="headline">
            <h2>{cake.title}</h2>
            <img src={cake.mainImg} alt="cake" />
          </div>
          <div className="reviews">
            {cake.reviews.map((review: Review) => (
              <Review
                title={review.title}
                description={review.description}
                key={review.title}
              />
            ))}
          </div>
          <div className="similar-cakes">
            <h2>Similar Cakes</h2>
            <div className="similar-images">
              <img src={cake.secondaryImg} alt="similar cake" />
              {/* If you want to show more similar cakes, you could map through other cakes */}
            </div>
          </div>
        </>
      )}
    </m.div>
  );
};

const Review = ({ title, description }: ReviewProps) => {
  return (
    <div className="review">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

export default CakeDetail;
