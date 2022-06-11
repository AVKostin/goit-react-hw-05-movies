import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import ReviewItem from "./ReviewItem";
import { fetchReviews } from "Services/movieApi";
import { mappedReviews } from "utils/mappedReviews";
import noData from "./no-review-found.png";
import { List, Item } from "./Reviews.styled";

export default function Reviews({ id }) {
  const [reviews, setReviews] = useState([]);
  Loading.arrows("Loading...", {
      backgroundColor: "rgba(0,0,0,0.8)",
      svgSize: "120px",
      svgColor: "#00FF00",
      messageFontSize: "26px",
      messageColor: "#00FF00",
    })
  useEffect(() => {
    fetchReviews(id).then((data) => setReviews(mappedReviews(data.results)));
  }, [id]);
  Loading.remove();

  return (
    <List>
      {reviews.length > 0 ? (
        reviews.map((item) => (
          <Item key={item.id}>
            <ReviewItem {...item} />
          </Item>
        ))
      ) : (
        <img width="300px" src={noData} alt="no review" />
      )}
    </List>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};
