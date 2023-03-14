import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { WithTheme } from "./../../HOC";
import { UserContext} from "../../../contexts";
import styles from "./UserProfile.module.scss";
import CONSTANTS from "../../../constants";
const { THEMES } = CONSTANTS;

const UserProfile = (props) => {
  const { theme } = props;
  const articleClasses = cx(styles.article, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <UserContext.Consumer>
      {({ id, firstName, lastName }) => (
        <article className={articleClasses}>
          <h3>
            <em>{id}) </em>
            {firstName} {lastName}
          </h3>
        </article>
      )}
    </UserContext.Consumer>
  );
};

UserProfile.defaultProps = {
  user: {
    id: 0,
    firstName: "noname",
    lastName: "noname",
  },
};
export const userShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
});
UserProfile.propTypes = {
  user: userShape.isRequired,
};
export default WithTheme(UserProfile);
