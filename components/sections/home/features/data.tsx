import {
  AdjustmentsHorizontalIcon,
  BanknotesIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

export const features = [
  {
    title: 'Track Your Income and Expenses',
    desc: 'Our budget tracker app allows you to easily track your income and expenses so you always know where your money is going.',
    icon: <BanknotesIcon className="w-8 text-white" />,
  },
  {
    title: 'Create a Budget',
    desc: 'Our app helps you create a budget based on your income and expenses, allowing you to see where you can cut back and save more.',
    icon: <AdjustmentsHorizontalIcon className="w-8 text-white" />,
  },
  {
    title: 'Set Savings Goals',
    desc: 'You can set savings goals within the app and track your progress towards them, helping you stay motivated to save more money.',
    icon: <ChatBubbleOvalLeftEllipsisIcon className="w-8 text-white" />,
  },
  {
    title: 'Receive Personalized Tips',
    desc: 'Based on your spending habits and goals, our app provides personalized tips and advice to help you achieve your financial objectives.',
    icon: <CodeBracketIcon className="w-8 text-white" />,
  },
];
