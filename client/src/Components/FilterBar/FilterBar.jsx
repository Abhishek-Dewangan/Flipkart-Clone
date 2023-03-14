import React, {useState} from 'react';
import styles from './FilterBar.module.css';
import {Accordion} from 'react-bootstrap';

const FilterBar = () => {
  const [sortby, setSortby] = useState('');
  const submit = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={styles.filterBarContainer}>
      <form onChange={submit}>
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
                <input type='checkbox' id='50%' name='upTo50' />{' '}
                <label htmlFor='50%'>Up to 50% or more</label>
              </div>
              <div>
                <input type='checkbox' id='40%' name='upTo40' />{' '}
                <label htmlFor='40%'>Up to 40%</label>
              </div>
              <div>
                <input type='checkbox' id='30%' name='upTO30' />{' '}
                <label htmlFor='30%'>Up to 30%</label>
              </div>
              <div>
                <input type='checkbox' id='20%' name='upTo20' />{' '}
                <label htmlFor='20%'>Up to 20%</label>
              </div>
              <div>
                <input type='checkbox' id='10%' name='upTo10' />{' '}
                <label htmlFor='10%'>Up to 10%</label>
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
      </form>
    </div>
  );
};

export default FilterBar;
