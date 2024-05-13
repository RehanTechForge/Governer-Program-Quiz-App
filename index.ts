#! /usr/bin/env node

import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'question1',
        message: 'What is the capital of France?',
        choices: ['Paris', 'London', 'Berlin', 'Rome'],
    },
    {
        type: 'list',
        name: 'question2',
        message: 'Which planet is known as the Red Planet?',
        choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    },
    // Add more questions as needed
];


async function startQuiz() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log('Answers:', answers);

        // Evaluate answers and give feedback
        const correctAnswers: any = {
            question1: 'Paris',
            question2: 'Mars',
            // Add correct answers for each question
        };

        let score = 0;
        for (const question of Object.keys(answers)) {
            if (answers[question] === correctAnswers[question]) {
                score++;
            }
        }

        console.log(`Your score: ${score}/${Object.keys(questions).length}`);
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

startQuiz();
