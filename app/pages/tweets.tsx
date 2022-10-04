import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import styles from "../styles/Home.module.css";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Tweets: NextPage = () => {
  const handleClickButton = () => {
    // const { data, error } = useSWR("/api/twitter/tweets", fetcher);

    // console.log("data", data);

    axios.get(`/api/twitter/tweets?q=フジシール`).then((response) => {
      console.log("axios", response);
    });
  };

  return (
    <div>
      <main>Tweets Page</main>
      <button onClick={handleClickButton}>twitter</button>
    </div>
  );
};

export default Tweets;
