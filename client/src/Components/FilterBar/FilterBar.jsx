import React from 'react';
import styles from './FilterBar.module.css';
import {Accordion} from 'react-bootstrap';

const FilterBar = () => {
  return (
    <div className={styles.filterBarContainer}>
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
              />{' '}
              <label for='popularity'>Popularity</label>
            </div>
            <div>
              <input type={'radio'} id='lth' name='sortby' value='lth' />{' '}
              <label for='lth'>Price - Low to High</label>
            </div>
            <div>
              <input type={'radio'} id='htl' name='sortby' value='htl' />{' '}
              <label for='htl'>Price - High to Low</label>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Discount</Accordion.Header>
          <Accordion.Body>
            <div>
              <input type='checkbox' id='50%' name='upTo50' />{' '}
              <label for='50%'>Up to 50% or more</label>
            </div>
            <div>
              <input type='checkbox' id='40%' name='upTo40' />{' '}
              <label for='40%'>Up to 40%</label>
            </div>
            <div>
              <input type='checkbox' id='30%' name='upTO30' />{' '}
              <label for='30%'>Up to 30%</label>
            </div>
            <div>
              <input type='checkbox' id='20%' name='upTo20' />{' '}
              <label for='20%'>Up to 20%</label>
            </div>
            <div>
              <input type='checkbox' id='10%' name='upTo10' />{' '}
              <label for='10%'>Up to 10%</label>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body>
            <input type={'range'} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FilterBar;
