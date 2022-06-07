import PropTypes from "prop-types";
import { LinksMenu, LinksItem } from "./MovieDetailsNavigation.module";

import CustomLink from "./CustomLink";

export default function MovieDetailsNavigation({ id }) {
  return (
    <LinksMenu>
      <LinksItem>
        <CustomLink to={`/movies/${id}/credits`}>Credits</CustomLink>
      </LinksItem>
      <LinksItem>
        <CustomLink to={`/movies/${id}/reviews`}>Reviews</CustomLink>
      </LinksItem>
      </LinksMenu>
  );
};

MovieDetailsNavigation.propTypes = {
  id: PropTypes.string.isRequired,
};

