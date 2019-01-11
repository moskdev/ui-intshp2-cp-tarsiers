import React from 'react';
import styles from './ProductContainer.module.scss';
import Carousel from '../Carousel/Carousel';

import jacket1 from '../../../assets/products/coats/running-jacket.png';

class ProductContainer extends React.Component {
  state = {
    products: [
      {
        id: 9000,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 9070,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 9010,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 90900,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 93400,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 10900,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 401900,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 900,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      },
      {
        id: 90910,
        src: jacket1,
        title: 'Reebok Track Jacket',
        price: '100$',
        sizes: ['s', 'm', 'l', 'xl'],
        colors: ['#e12e3f', '#34404b', '#3ab3ff', '#2fd967']
      }
    ]
  };

  title = 'New Arrivals';

  render() {
    const titleArr = this.title.split(' ');
    const { products } = this.state;

    return (
      <section className={`${styles.products}`}>
        <div className={styles.products_heading}>
          <h2>
            <span className="highlighted">{titleArr[0]}</span>
            &nbsp;
            {titleArr[1]}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.products_list}>
          <Carousel itemsPerView={4} data={products} />
        </div>
      </section>
    );
  }
}

export default ProductContainer;
