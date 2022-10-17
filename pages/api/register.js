/* eslint-disable import/no-anonymous-default-export */
// Demo API
// https://nextjs.org/learn/basics/api-routes/api-routes-details

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
