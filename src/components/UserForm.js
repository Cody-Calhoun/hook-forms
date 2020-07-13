import React, { useState } from "react";

export const UserForm = (props) => {
  const { inputs, setInputs } = props;

  const createUser = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input onChange={createUser} type="text" name="firstName" />
        </div>
        <br />
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input onChange={createUser} type="text" name="lastName" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email: </label>
          <input onChange={createUser} type="email" name="email" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password: </label>
          <input onChange={createUser} type="password" name="password" />
        </div>
        <br />
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input onChange={createUser} type="password" name="confirmPassword" />
        </div>
        <br />
        <button onClick={createUser}>Click to Create!</button>
      </form>
    </>
  );
};
