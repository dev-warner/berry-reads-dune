import Twit from "twit";

const twit = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
});

await twit.post("statuses/update", { status: `` });

console.log(`Done annoying Matt Berry 🐛`);
