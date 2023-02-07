// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../../data";

export default function handler(req, res) {
  return res.status(200).json(data);
}
