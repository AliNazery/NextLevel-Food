import React from 'react'
import Image from 'next/image';
import classes from './page.module.css'

export default function MealDetailsPage() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill/>
        </div>
        <div className={classes.headerText}>
          <h1></h1>
        </div>
      </header>
      <main></main>
    </>
  );
}
