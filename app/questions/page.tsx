'use client';

import React, { useState } from 'react';
import cn from 'classnames';

import { AnswerTab } from '@/components/large/AnswerTab';
import styles from './styles.module.css';
import { data } from './data';

const Questions = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className={styles.page}>
      <h2 className={cn(styles.text, styles.title)}>Questions</h2>
      <div className={styles.tabs}>
        {data.map(([title], index) => (
          <AnswerTab
            text={title}
            active={activeTab === index}
            onActivate={() => setActiveTab(index)}
          />
        ))}
      </div>
      <h4 className={cn(styles.text, styles.answerTitle)}>{data[activeTab][0]}</h4>
      <p className={cn(styles.text, styles.answerText)}>{data[activeTab][1]}</p>
    </div>
  );
};

export default Questions;
