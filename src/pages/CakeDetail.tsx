import { useState, useEffect } from "react";
import styled from "styled-components";
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
  const navigate = useNavigate();
  const { id } = useParams();
  const [cakes] = useState(CakeState);
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
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Headline>
            <h2>{cake.title}</h2>
            <img src={cake.mainImg} alt="cake" />
          </Headline>
          <Reviews>
            {cake.reviews.map((review) => (
              <Review
                key={review.title}
                title={review.title}
                description={review.description}
              />
            ))}
          </Reviews>
        </Details>
      )}
    </>
  );
};

const Details = styled(m.div)`
  color: white;
  h2 {
    position: relative;
    left: 47%;
  }
  @media only screen and (max-width: 2200px) {
    overflow: hidden;
  }

  @media only screen and (max-width: 400px) {
    overflow: hidden;
    h2 {
      left: 27%;
    }
  }

  @media only screen and (min-width: 401px) and (max-width: 768px) {
    overflow: hidden;
    h2 {
      left: 27%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 932px) {
    h2 {
      left: 40%;
    }
  }
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Reviews = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 400px) {
    display: block;
    margin: 2rem 2rem;
  }
  @media only screen and (min-width: 401px) and (max-width: 768px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const ReviewStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const Review = ({ title, description }: ReviewProps) => {
  return (
    <ReviewStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </ReviewStyle>
  );
};

export default CakeDetail;
