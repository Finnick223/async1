import { getUsers } from './data/getUsers';
import { getAlbums } from './data/getAlbums';

// const sleep = (time: number) =>
//   new Promise((resolve) => setTimeout(resolve, time));

const getContainer = () => {
  const container = document.querySelector<HTMLDivElement>('.container');
  if (!container) throw new Error('container doesnt exist');
  const row1 = document.querySelector<HTMLDivElement>('.row1');
  const row2 = document.querySelector<HTMLDivElement>('.row2');
  const del = document.querySelector<HTMLButtonElement>('.del');
  const loader = document.querySelector<HTMLDivElement>('.loader');
  return {
    container,
    row1,
    row2,
    del,
    loader,
  };
};

const loading = () =>
  new Promise((resolve, reject) => {
    const { loader } = getContainer();
    if (!loader) throw new Error('nie da sie wczytac loadera');
    loader.style.display = 'block';
    setTimeout(() => {
      resolve((loader.style.display = 'none'));
      reject({ error: 'no users' });
    }, 1500);
  });

const renderUser = (id: number, username: string) => {
  const element = document.createElement('div');
  element.id = String(id);
  element.textContent = username;
  element.classList.add('flex-item');
  const { row1 } = getContainer();
  row1?.appendChild(element);
};

const renderAlbums = (id: string, title: string) => {
  const el = document.createElement('div');
  el.textContent = title;
  el.classList.add('flex-item');
  const { row2 } = getContainer();
  row2?.appendChild(el);
};

const clearAlbums = () => {
  const { row2 } = getContainer();
  if (row2) row2.innerHTML = '';
};

//! INIT

const init = async () => {
  const { del, row1 } = getContainer();

  try {
    const data = await getUsers();
    // console.log(data[0]);
    // console.log(data[0].id);
    // console.log(data[0].name);
    // console.log(data[0].username);
    // await sleep(2000);
    // console.log('data', data);
    for (const i in data) {
      renderUser(data[i].id, data[i].username);
    }
  } catch (e) {
    console.log(e);
  }

  row1?.addEventListener('click', async function (e) {
    try {
      if ((e.target as HTMLElement).id) {
        clearAlbums();
        await loading();
        const album = await getAlbums((<HTMLElement>e.target).id as string);

        for (const i in album) {
          renderAlbums(album[i].id, album[i].title);
        }
      }
    } catch (e) {
      console.log(e);
    }
  });

  del?.addEventListener('click', clearAlbums);
};

init();
