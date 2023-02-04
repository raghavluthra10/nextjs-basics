// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
   return res
      .status(200)
      .json({ name: "John Doe", age: 32, school: "hahahha" });
}
