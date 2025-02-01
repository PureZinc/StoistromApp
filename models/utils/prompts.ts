function randomPromptGenerator(): string {
    const prompts = ['How was your day?',
           'What are your plans for today?',
           'Imagine you woke up 5 years ago. How would your life change?',
           'How has your goals now changed from your goals 5 years ago?',
           'Write 3 things you are grateful for!',
           'What were you doing at this time 1 year ago?',
           "What is a habit you'd like to develop or change?",
           "Reflect on a time when you stepped out of your comfort zone.",
           "Describe a moment from today that made you smile.",
           "What's been a recent obstacle, and how can you work through it?",
           "List five things you'd like to achieve or experience in your lifetime.",
           "Write about a place you'd love to visit and what you'd do there.",
           "Describe a recent challenge you faced and what you learned from it.",
           "Write about a person who has positively impacted your life and why.",
           "Reflect upon a dream you once had that left a profound impact on your life. Describe the dream and explore the lasting impressions it had on your thoughts, emotions, or actions.",
           "If you wrote a novel about the current year, what would be it's summary on the back of the book?",
           "Reflect upon a time where you felt happy. What were you doing at the time? How did you view the world?",
           "Write about a goal you want to accomplish some day. How do you think you can achieve that goal?",
           "Describe a memorable encounter with a stranger that left a lasting impression on you.",
           "What's a valuable life lesson you've learned from a mistake or failure?",
           "Write about a book, movie, or piece of art that deeply resonated with you and why.",
           "If you could have dinner with any historical figure, who would it be and what would you ask them?",
           "Share a childhood memory that still brings you joy when you think about it.",
           "Describe a skill or hobby you've always wanted to learn and why it interests you.",
           "Imagine you have a magic wand. What's one thing you would change in the world and why?",
           "Write a letter to your future self, offering advice and insights for the years to come.",
           "Recall a time when you overcame a fear. How did you feel before, during, and after?",
           "What's a quote or saying that inspires you? Explain its significance in your life.",
           "Describe your ideal day from start to finish, including all the activities and people involved.",
           "If you could travel back in time and give your younger self advice, what would you say?",
           "Write about a moment when you felt completely in sync with nature. Where were you, and what were you doing?",
            "Reflect on a time when you had to make a difficult decision. How did you make your choice, and what were the consequences?",
           "If you could witness any event in history, past or future, what would it be and why?",
            "Share a recent act of kindness you witnessed or experienced, no matter how small.",
           "What's a personal mantra or motto you live by, and how does it shape your actions and decisions?",
           "Imagine you had unlimited resources and time. How would you use them to make a positive impact on the world?",
           "Describe a moment when you felt completely at peace with yourself and your surroundings.",
           "Write about a place you consider your sanctuary, a space where you find solace and inspiration."
    ]


    const ranPrompt = prompts[Math.floor(Math.random() * prompts.length)]

    return ranPrompt;
}

export default randomPromptGenerator;