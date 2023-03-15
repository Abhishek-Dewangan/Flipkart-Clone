import React, {useEffect, useState} from 'react';
import styles from './FilterBar.module.css';
import {Accordion} from 'react-bootstrap';
import {filterProducts} from '../../Services/Actions/ProductAction';

const FilterBar = ({variables}) => {
  const [sortby, setSortby, discount, setDiscount] = variables;
  // useEffect(() => console.log(sortby, discount), [sortby, discount]);

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
              <input type={'range'} name={'price'} />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </form>
    </div>
  );
};

export default FilterBar;
