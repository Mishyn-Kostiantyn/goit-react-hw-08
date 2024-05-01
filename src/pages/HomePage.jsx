import React from 'react'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import css from './HomePage.module.css';
const HomePage = () => {
    const adressBook = <FontAwesomeIcon icon={faAddressBook} />
  return (
      <div className={css.homePageContainer} >
      <h1>Phonebook {adressBook}</h1>
      <p className={css.description}>Here you can add your contacts and search them. To start use this application You must register or if you already have an account, then you can log in.</p>
    </div>
  )
}

export default HomePage