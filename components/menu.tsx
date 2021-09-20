// core
import React, { useState, useRef } from "react";
import Link from "next/link";

// components
import Notification from "./notification";

// styles
import menuStyles from "../styles/components/Menu.module.css";

const Menu = () => {
  // =================  open and close the Menu function ============= //
  const closeMenu = () => {
    setOpenMenuState({
      newClass: `${menuStyles.menuWrapperClose}`,
      newFunction: openMenu,
      newbuttonClass: "",
    });
    setcontactFormState(false);
    setErrorMessageState(false);
  };

  const openMenu = () => {
    setOpenMenuState({
      newClass: `${menuStyles.menuWrapperOpen}`,
      newFunction: closeMenu,
      newbuttonClass: `${menuStyles.menuButtonOpen}`,
    });
  };

  const [openMenuState, setOpenMenuState] = useState<{
    newClass: string;
    newFunction: any;
    newbuttonClass: string;
  }>({ newClass: "", newFunction: openMenu, newbuttonClass: "" });

  // =================  open and close the contact function ============= //
  const [contactFormState, setcontactFormState] = useState<boolean>(false);
  const [errorMessageState, setErrorMessageState] = useState<boolean>(false);
  const [notificationState, setNotificationState] = useState<
    boolean | JSX.Element
  >(false);

  const openContactForm = () => {
    setcontactFormState(true);
  };

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const closeContactForm = () => {
    if (name.current && email.current && textArea.current) {
      if (
        name.current.value === "" ||
        email.current.value === "" ||
        textArea.current.value === ""
      ) {
        setErrorMessageState(true);
      } else {
        setcontactFormState(false);
        setErrorMessageState(false);
        setOpenMenuState({
          newClass: `${menuStyles.menuWrapperClose}`,
          newFunction: openMenu,
          newbuttonClass: "",
        });
        setNotificationState(
          <Notification closeNotification={() => setNotificationState(false)} />
        );

        const message = {
          name: name.current.value,
          email: email.current.value,
          message: textArea.current.value,
        };

        const sendEmail = async () => {
          await fetch("/api/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
          });
        };
        sendEmail();
      }
    }
  };

  return (
    <div className={menuStyles.mainWrapper}>
      {notificationState}
      <div className={menuStyles.menuWrapperHeader}>
        <Link href='/'>
          <a className={menuStyles.logo}></a>
        </Link>
        <a
          href='https://www.instagram.com/stwcarthur/'
          className={menuStyles.instagramIcon}
        ></a>
        <a
          href='https://www.facebook.com/stwcofarthur/'
          className={menuStyles.facebookIcon}
        ></a>
        <div
          className={`${menuStyles.menuButton} ${openMenuState.newbuttonClass}`}
          onClick={openMenuState.newFunction}
        ></div>
      </div>
      {!contactFormState && (
        <nav className={`${menuStyles.menuWrapper} ${openMenuState.newClass}`}>
          <Link href='/about'>
            <a>ABOUT</a>
          </Link>
          <Link href='/watch'>
            <a>WATCH</a>
          </Link>
          <a href='https://www.givelify.com/donate/spirit-and-truth-worship-center-cumberland-gap-tn-2j7wy5MjE4NzM=/donation/amount'>
            GIVE
          </a>
          <div
            className={menuStyles.chatButton}
            onClick={openContactForm}
          ></div>
        </nav>
      )}
      {contactFormState && (
        <section className={menuStyles.contactForm}>
          {errorMessageState && (
            <p className={`${menuStyles.errorMessage}`}>
              Sorry all fields are required ❌
            </p>
          )}
          <input
            type='text'
            maxLength={50}
            required
            placeholder='Name'
            ref={name}
          />
          <input
            type='email'
            maxLength={50}
            required
            placeholder='email'
            ref={email}
          />
          <textarea
            required
            placeholder='How can we help?...'
            ref={textArea}
          ></textarea>
          <button
            onClick={closeContactForm}
            className={`std-button ${menuStyles.sendButton}`}
          >
            SEND
          </button>
        </section>
      )}
    </div>
  );
};

export default Menu;
