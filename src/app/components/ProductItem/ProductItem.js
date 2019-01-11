import React, { Component } from 'react';
import { DisplayFront, DisplayDetails } from './ProductDisplay';
import styles from './ProductItem.module.scss';

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showDetails: false };
    this.itemRef = React.createRef();
  }

  toggleView = () =>
    this.setState(state => ({ showDetails: !state.showDetails }));

  clickHandle = (e, id) => {
    e.preventDefault();
    console.log(id);
  };

  componentDidMount = () => {
    const { updateTranslateStep } = this.props;

    updateTranslateStep(this.itemRef.current.offsetWidth + 30);
  };

  render() {
    const { data } = this.props;
    const { showDetails } = this.state;
    const cardView = showDetails ? (
      <DisplayDetails {...data} clickHandler={this.clickHandle} />
    ) : (
      <DisplayFront {...data} />
    );

    return (
      <div
        ref={this.itemRef}
        className={styles.product_card}
        onMouseLeave={this.toggleView}
        onMouseEnter={this.toggleView}
      >
        {cardView}
      </div>
    );
  }
}

export default ProductItem;
