import imgSpotify from "../images/desktop/spotify.svg";
import imgApplePodcast from "../images/desktop/apple-podcast.svg";
import imgGooglePodcasts from "../images/desktop/google-podcasts.svg";
import imgPocketCasts from "../images/desktop/pocket-casts.svg";
import { useState } from "react";
import validator from "validator";

const Main = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    validate();
  }

  function validate() {
    const validateEmail = validator.isEmail(formData.email);
    if (!validateEmail) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <main className="flex w-[20.438rem] flex-col items-center bg-transparent md:ml-10 md:mr-auto md:w-[39.688rem] md:items-start md:bg-[#121725] md:pt-[5.813rem] xl:ml-[10.313rem] xl:h-[31.813rem] xl:w-[45.188rem] xl:pt-[5.5rem] xl:pr-[3.625rem]">
      <div className="mb-[2.063rem] flex flex-col items-center gap-4 text-center md:mb-10 md:items-start md:gap-[1.938rem] md:text-left xl:gap-6">
        <h1 className="text-[1.625rem] font-light uppercase leading-[2.375rem] tracking-normal text-white md:text-[3rem] md:leading-[3.5rem] xl:text-[3.25rem] xl:leading-[3.875rem]">
          <span className="text-[#54E6AF]">Publish your podcasts</span>{" "}
          everywhere.
        </h1>
        <p className="text-[0.938rem] font-light leading-[1.563rem] tracking-normal text-[#C2CBE5] md:w-[27.813rem] md:text-lg">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>
      </div>
      <div className="flex flex-col gap-12 md:flex-col-reverse md:gap-16">
        <div className="flex w-[19.688rem] items-center md:w-[33.5rem]">
          <a className="mr-[1.438rem] md:mr-10" href="#">
            <img
              className="h-[1.063rem] w-[3.5rem] md:h-[1.813rem] md:w-[6rem]"
              src={imgSpotify}
              alt=""
            />
          </a>
          <a className="mr-[1.563rem] md:mr-10" href="#">
            <img
              className="h-[1.063rem] w-[2.813rem] md:h-[1.813rem] md:w-[4.875rem]"
              src={imgApplePodcast}
              alt=""
            />
          </a>
          <a className="mr-4 md:mr-[1.688rem]" href="#">
            <img
              className="h-[0.688rem] w-[4.563rem] md:h-[1.125rem] md:w-[7.813rem]"
              src={imgGooglePodcasts}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="h-[0.938rem] w-[4.813rem] md:h-[1.625rem] md:w-[8.063rem]"
              src={imgPocketCasts}
              alt=""
            />
          </a>
        </div>
        <form
          className="relative flex w-full flex-col gap-4 md:w-[26.688rem] xl:w-[26.688rem]"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            className="peer h-[2.875rem] w-full rounded-[28px] bg-[#2C344B] px-8 text-white caret-white/50 placeholder:text-[0.875rem] placeholder:font-bold placeholder:leading-[1.75rem] placeholder:tracking-normal placeholder:text-white/50 focus:outline-none md:h-[3.5rem] "
            type="email"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {error && (
            <p className="absolute left-8 top-12 text-[0.5rem] font-bold leading-3 tracking-normal text-[#FB3E3E] md:top-16 md:text-xs md:leading-[14px]">
              Oops! Please check your email
            </p>
          )}
          <button
            type="submit"
            className="flex h-[2.875rem] items-center justify-center rounded-[28px] bg-[#54E6AF] text-[0.875rem] font-bold leading-[1.75rem] tracking-normal text-[#121725] md:absolute md:top-[0.313rem] md:right-[0.313rem] md:h-[2.875rem] md:w-[10.125rem]"
          >
            Request Access
          </button>
        </form>
      </div>
    </main>
  );
};

export default Main;
