import React, { Component } from "react";
import styles from './Ciao.module.css';

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handleSwitch = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
  render() {
    console.log(styles)
    const { isHi } = this.state;
    const { classStyle, name, id} = this.props;
    if(!isHi){
      return <p> id:{id} Bye, {name?? "anonim"}</p>
    }
    return (
      <article className={classStyle}>
        <h2 className={styles.container}> id:{id}) 
          {isHi ? " hi" : " bye"}, {name ?? "anonim"}
        </h2>
        <button className={styles.btn} onClick={this.handleSwitch}>{isHi?'bye':'hi'}</button>
      </article>
    );
  }
}
export default Ciao;
