import React, {useEffect, useState} from 'react';
import styles from './FilterBar.module.css';
import {Accordion} from 'react-bootstrap';
import {filterProducts} from '../../Services/Actions/ProductAction';

const FilterBar = ({variables}) => {
  const [sortby, setSortby, discount, setDiscount, priceRange] = variables;
  useEffect(() => console.log(priceRange), [priceRange]);

  return (
    <div className={styles.filterBarContainer}>
      <form onChange={(e) => filterProducts(e, variables)}>
        <h4>Filters</h4>
        <Accordion defaultActiveKey={['0']}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Sort By</Accordion.Header>
            <Accordion.Body>
              <div>
                <input
                  type={'radio'}
                  id='popularity'
                  name='sortby'
                  value='popularity'
                  defaultChecked
                />{' '}
                <label htmlFor='popularity'>Popularity</label>
              </div>
              <div>
                <input type={'radio'} id='lth' name='sortby' value='lth' />{' '}
                <label htmlFor='lth'>Price - Low to High</label>
              </div>
              <div>
                <input type={'radio'} id='htl' name='sortby' value='htl' />{' '}
                <label htmlFor='htl'>Price - High to Low</label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>Discount</Accordion.Header>
            <Accordion.Body>
              <div>
                <input type='checkbox' id='50%' name='discount' value={50} />{' '}
                <label htmlFor='50%'>50% or more</label>
              </div>
              <div>
                <input type='checkbox' id='40%' name='discount' value={40} />{' '}
                <label htmlFor='40%'>40% or more</label>
              </div>
              <div>
                <input type='checkbox' id='30%' name='discount' value={30} />{' '}
                <label htmlFor='30%'>30% or more</label>
              </div>
              <div>
                <input type='checkbox' id='20%' name='discount' value={20} />{' '}
                <label htmlFor='20%'>20% or more</label>
              </div>
              <div>
                <input type='checkbox' id='10%' name='discount' value={10} />{' '}
                <label htmlFor='10%'>10% or more</label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Header>Price</Accordion.Header>
            <Accordion.Body>
              <div>
                <input
                  type='checkbox'
                  id='1000'
                  name='pricerange'
                  value={'0-999'}
                />{' '}
                <label htmlFor='1000'>Rs. 999 and Below</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='5000'
                  name='pricerange'
                  value={'1000-4999'}
                />{' '}
                <label htmlFor='5000'>Rs. 1000 - Rs. 4999</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='10000'
                  name='pricerange'
                  value={'5000-9999'}
                />{' '}
                <label htmlFor='10000'>Rs. 5000 - Rs. 9999</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='20000'
                  name='pricerange'
                  value={'10001-19999'}
                />{' '}
                <label htmlFor='20%'>Rs. 10000 - Rs. 19999</label>
              </div>
              <div>
                <input
                  type='checkbox'
                  id='20001'
                  name='pricerange'
                  value={'20000-300000'}
                />{' '}
                <label htmlFor='20001'>Rs. 20000 and Above</label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </form>
    </div>
  );
};

export default FilterBar;
