import React from 'react'
import { Modal } from 'react-bootstrap'
import styles from './OrderSuccess.module.css'

const OrderSuccess = ({OrderSuccess,handleCloseOrderSuccess}) => {
  return (
    <Modal show={OrderSuccess}>OrderSuccess</Modal>
  )
}

export default OrderSuccess