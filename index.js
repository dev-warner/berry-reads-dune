import Twit from "twit";

const twit = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET,
  timeout_ms: 60 * 1000,
  strictSSL: true,
});

await twit.post("statuses/update", { status: `hehee matt smell` });

console.log(`Done annoying Matt Berry 🐛`);
