import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function ProfileForm(props) {
  //   const personal_info = props.personal_profile;
  const personal_info = props?.personal_profile;
  const router = useRouter();

  const user_info = props?.user_profile;
  const address = props?.address;

  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const doorRef = useRef();
  const add1Ref = useRef();
  const add2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();
  const zipcodeRef = useRef();
  const aboutRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredFName = fNameRef.current.value;
    const enteredLName = lNameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredMobile = mobileRef.current.value;
    const enteredDoorNo = doorRef.current.value;
    const enteredAdd1 = add1Ref.current.value;
    const enteredAdd2 = add2Ref.current.value;
    const enteredCity = cityRef.current.value;
    const enteredState = stateRef.current.value;
    const enteredCountry = countryRef.current.value;
    const enteredZipcode = zipcodeRef.current.value;
    const enteredAbout = aboutRef.current.value;

    const reqBody = {
      requestedInfo: "personal",
      fname: enteredFName,
      lname: enteredLName,
      email: enteredEmail,
      mobile: enteredMobile,
      door_no: enteredDoorNo,
      add1: enteredAdd1,
      add2: enteredAdd2,
      city: enteredCity,
      state: enteredState,
      country: enteredCountry,
      zipcode: enteredZipcode,
      about: enteredAbout,
    };

    fetch(`/api/org/employee/profile/${props?.user_profile?.id}`, {
      method: "POST",
      body: JSON.stringify(reqBody),

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    router.push("/profile");
  }

  return (
    <>
      <div className=" m-0 bg-white shadow overflow-hidden sm:rounded-lg drop-shadow-2xl">
        <form
          className="space-y-8 divide-y divide-gray-200 p-6"
          onSubmit={submitFormHandler}
        >
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-2">
              <div>
                <h3 className="text-xl leading-6 font-medium text-gray-900">
                  Update Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className={
                        personal_info?.first_name == null
                          ? "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md read-only:bg-gray-100"
                      }
                      disabled={
                        personal_info?.first_name == null ? false : true
                      }
                      defaultValue={personal_info?.first_name}
                      ref={fNameRef}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className={
                        personal_info?.last_name === "undefined"
                          ? "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          : "shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md read-only:bg-gray-100"
                      }
                      disabled={personal_info?.last_name == null ? false : true}
                      defaultValue={personal_info?.last_name}
                      ref={lNameRef}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={personal_info?.personal_email}
                      ref={emailRef}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="mobile-num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mobile Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="mobile-num"
                      id="mobile-num"
                      autoComplete="family-name"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={personal_info?.personal_mobile}
                      ref={mobileRef}
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <h3>Address</h3>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="door-num"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Door Number
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="door-num"
                      id="door-num"
                      autoComplete="door-num"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={address?.door_num}
                      ref={doorRef}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="add-line-1"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 1
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="add-line-1"
                      id="add-line-1"
                      autoComplete="add-line-1"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={address?.add_line1}
                      ref={add1Ref}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="add-line-2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Address Line 2
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="add-line-2"
                      id="add-line-2"
                      autoComplete="add-line-2"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={address?.add_line2}
                      ref={add2Ref}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={address?.city}
                      ref={cityRef}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State / Province
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={address?.state}
                      ref={stateRef}
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postal code
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={address?.zipcode}
                      ref={zipcodeRef}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue={address?.country}
                      ref={countryRef}
                    >
                      <option value={"India"}>India</option>
                      <option value={"USA"}>United States</option>
                      <option value={"Canada"}>Canada</option>
                      <option value={"Canada"}>Japan</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    About Your Self
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-cyan-500 focus:border-cyan-500  dark:focus:border-cyan-500"
                    defaultValue={personal_info?.about}
                    ref={aboutRef}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                // onClick={getUserDataFromDb()}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-cyan-600 text-white hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
