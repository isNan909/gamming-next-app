// import axios from 'axios';

// export const getGames = function () {
//   const options = {
//     method: 'GET',
//     url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
//     headers: {
//       'x-rapidapi-host': `${process.env.RAPID_API_HOST}`,
//       'x-rapidapi-key': `${process.env.RAPTIDAPI_KEY}`,
//     },
//   };
//   axios(options);
//   try {
//     const allGames = response.data;
//     console.log(allGames);
//     return allGames;
//   } catch {
//     console.log('error occured');
//   }
// };

// import axios from 'axios';

// // Create instance called instance
// const instance = axios.create({
//   baseURL: 'https://example.com',
//   headers: {
//     'content-type': 'application/json',
//     'x-rapidapi-host': process.env.RAPID_API_HOST,
//     'x-rapidapi-key': process.env.RAPTIDAPI_KEY,
//   },
// });

// export default {
//   getData: () =>
//     instance({
//       method: 'GET',
//       url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
//       transformResponse: [
//         function (data) {
//           const json = JSON.parse(data);
//           const dates = Object.keys(json['nested object']);
//           data = {
//             dates,
//           };
//           return data;
//         },
//       ],
//     }),
// };
