import PropTypes from "prop-types";
import { Wrapper, Author, AuthorName, Text, Avatar, NoAvatar } from "./ReviewItem.module";

export default function ReviewItem ({ name, avatar, text }) {
  return (
    <Wrapper>
      <Author>
        {avatar ? <Avatar src={avatar} /> : <NoAvatar />}
        <AuthorName>{name}</AuthorName>
      </Author>

      <Text>{text}</Text>
    </Wrapper>
  );
};

ReviewItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  text: PropTypes.string,
};
