import { FormEvent, useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0"
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        className="rounded-md border border-slate-300 py-2 px-4 outline-none"
      />

      <button
        type="submit"
        className="py-2 px-5 rounded-md bg-blue-500 text-white text-headingxs font-medium cursor-pointer hover:bg-blue-400 tracking-tight"
      >
        Join our newsletter
      </button>
    </form>
  );
};

export default NewsLetter;
