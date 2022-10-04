import { TweetV2, TwitterApi } from "twitter-api-v2";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse<TweetV2[]>) => {
  const q = req.query.q as string;
  console.log("q", q);
  // Instantiate with desired auth type (here's Bearer v2 auth)
  const a = process.env.TWITTER_API_KEY;
  const bearerToken = process.env.BEARER_TOKEN;

  const twitterClient = new TwitterApi(bearerToken ?? "");

  const client = twitterClient.readOnly;

  //const user = await client.v2.userByUsername("");
  const searchRes = await client.v2.search(q);
  // console.log("user", user);
  // console.log("followers", searchRes);

  return res.status(200).json(searchRes.tweets);
};
