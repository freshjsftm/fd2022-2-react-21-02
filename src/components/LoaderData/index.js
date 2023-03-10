import { Component } from "react";
import PropTypes from "prop-types";

class LoaderData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null,
      isPending: false,
    };
  }
  load = () => {
    const { loadData } = this.props;
    this.setState({ isPending: true });
    loadData()
      .then((data) => this.setState({ data }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };
  componentDidMount() {
    this.load();
  }
  render() {
    const { render } = this.props;
    return render(this.state);
  }
}

LoaderData.propTypes = {
  loadData: PropTypes.func,
  render: PropTypes.func.isRequired,
};

export default LoaderData;
