// import users from './users.json';

// export const getUsers = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('jest git');
//       reject({ error: 'no users' });
//     }, 2000);
//   });
// };

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch(console.error);
};
