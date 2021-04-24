import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import answer from '../../views/TestManagement/assets/img/answer.png';
import fiftyFifty from '../../views/TestManagement/assets/img/fiftyFifty.PNG';
import hints from '../../views/TestManagement/assets/img/hints.PNG';
import options from '../../views/TestManagement/assets/img/options.PNG';

const TestLibrary = () => (
    <div class="flex justify-center ...">
        <title>Quiz Instructions - Quiz App</title>
        <div className="instructions container">
            <h1>How to Pass the Test</h1>
            <p>Ensure you read this guide from start to finish.</p>
            <div class="flex justify-center ...">            
                        <ul>
                <li>The Test has a duration of 15 minutes and ends as soon as your time elapses.</li>
                <li>Each Test consists of 15 questions.</li>
                <li>
                    Every question contains 4 options.
                    <img src={options} alt="Quiz App options example" />
                </li>
              
                <li>
                    Select the option which best answers the question by clicking (or selecting) it.
                    <img src={answer} alt="Quiz App answer example" />
                </li>
               
                <li>
                    Each Test has 2 lifelines namely:
                    <ul id="sublist">
                        <li>2 50-50 chances</li>
                        <li>5 Hints</li>
                    </ul>
                  
                </li>
                <li>
                    Selecting a 50-50 lifeline by clicking the icon
                    <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                    will remove 2 wrong answers, leaving the correct answer and one wrong answer
                    <img src={fiftyFifty} alt="Quiz App Fifty-Fifty example"/>
                </li>
                <li>
                    Using a hint by clicking the icon
                    <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                    will remove one wrong answer leaving two wrong answers and one correct answer. You can use as many hints as possible on a single question.
                    <img src={hints} alt="Quiz App hints example" />
                </li>
                <li>Feel free to quit (or retire from) the Test at any time. In that case your score will be revealed afterwards.</li>
                <li>The timer starts as soon as the Test loads.</li>
                <li>Let's do this if you think you've got what it takes?</li>
            </ul>
            </div>
            <div>
                <span className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150-start"><Link to="/">No take me back</Link></span>
                <span className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150-end"><Link to="/play/quiz">Okay, Let's do this!</Link></span>
            </div>
            <div>
            
            </div>
        </div>
  </div>
);

export default TestLibrary;