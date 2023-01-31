import React from 'react';
import { FeedBackOptions } from './FeedBackOptions/FeedBackOptions';
import { Notification } from './Notification/Notifications';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App = () => {
  const [feedback, setfeedback] = useState ({
      good: 0,
      neutral: 0,
      bad: 0,
});


const handleLeaveFeedback = event => {
  const {name} = event.target;
  setfeedback(prevState => ({
    ...prevState,
    [name]: prevState[name] + 1 }));
};

const countTotalFeedback = () => {
  return feedback.good + feedback.neutral + feedback.bad;
};

const countPositiveFeedbackPercentage = () => {
 return Math.round((feedback.good / countTotalFeedback()) *100 );
};

  return (
    <>
     <Section title = "Please leave feedback">
      <FeedBackOptions 
      options={feedback}
      onLeaveFeedback={handleLeaveFeedback}
      />
      { countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback!!"></Notification>) : (
          <Statistics 
          good={feedback.good} 
          neutral={feedback.neutral} 
          bad={feedback.bad} 
          total={countTotalFeedback()} 
          positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
        }