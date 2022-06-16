import React from 'react';
import { FaComment } from 'react-icons/fa';
import './SingleMeme.scss';

export const SingleMeme = () => {
  return (
    <div className="single-meme">
      <header className="single-meme__header">
        <h2 className="single-meme__title">tytuł</h2>
        <div className="single-meme__icon">
          <FaComment /> 29
        </div>
      </header>
      <main className="single-meme__main">
        <div className="single-meme__user">user name 2godz</div>
        <img
          className="single-meme__img"
          src="https://i1.jbzd.com.pl/contents/2022/06/normal/bGaa5AZ2QeuDYC85bhR87XjF3wnqXKNa.jpg"
          alt="meme"
        />
      </main>
    </div>
  );
};
