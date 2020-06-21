import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong></strong>
          <p></p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast hasDescription type="error">
        <FiAlertCircle size={20} />
        <div>
          <strong></strong>
          <p></p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong></strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
