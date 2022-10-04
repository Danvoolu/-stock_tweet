import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TweetsTable from "../../src/components/organisms/tweetsTable";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Tweets: NextPage = () => {
  const router = useRouter();
  const { code } = router.query;
  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState<any[]>([]);

  useEffect(() => {
    axios.get(`/api/stock/stocks`).then((response) => {
      const stock = response.data.find((x: any) => x.code === code);
      setSearchWord(stock.name);
    });
  }, []);

  useEffect(() => {
    handleClickButton();
  }, [searchWord]);

  const handleClickButton = () => {
    console.log("searchWord", searchWord);
    if (!searchWord) return;
    axios.get(`/api/twitter/tweets?q=${searchWord}`).then((response) => {
      setSearchResult(response.data);
    });
  };

  return (
    <div>
      銘柄名：{searchWord}
      <TweetsTable data={searchResult} />
    </div>
  );
};

export default Tweets;
