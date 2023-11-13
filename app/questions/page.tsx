import React from 'react';
import cn from 'classnames';

import { AnswerTab } from '@/components/large/AnswerTab';
import styles from './styles.module.css';

const Questions = () => {
  return (
    <div>
      <AnswerTab text="Text 12345" active={false} />
      <AnswerTab text="Text 67890" active />
    </div>
  );
};

export default Questions;
