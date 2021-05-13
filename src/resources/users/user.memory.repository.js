// const dataBase = [];
let dataBase = [
  {
    id: 'e27d8b4a-46e4-4b43-a6f5-66b764c39ada',
    name: '222',
    login: '222',
    password: 'password',
  },
  {
    id: '9227eb75-e7c9-4fd3-a493-2bd655000f4a',
    name: '111',
    login: '111',
    password: 'password',
  },
  {
    id: 'b8024a93-3e78-415b-946c-ef7f79deb6ec',
    name: '333',
    login: '333',
    password: 'password',
  },
  {
    id: 'b8024a93-3e78-415b-946c-ef7f79deb6e1',
    name: '555',
    login: '555',
    password: 'password',
  },
];

const getAll = async () =>
  // TODO: mock implementation. should be replaced during task development
  // [];

  dataBase;

const addNewUser = async (newUser) => {
  dataBase.push(newUser);
};

const updateUser = async (userArgs, userID) => {
  const newDB = dataBase.map((item) => {
    if (item.id === userID) {
      const updatedItem = userArgs;
      updatedItem.id = item.id;
      return updatedItem;
    }
    return item;
  });

  dataBase = newDB;
  // console.log('New DB', dataBase);
};

const deleteUser = async (userID) => {
  const newDB = dataBase.map((item) => {
    if (item.id === userID) {
      const update = {};
      update.id = item.id;
      return update;
    }
    return item;
  });

  dataBase = newDB;
  // console.log('New DB', dataBase);
};

module.exports = { getAll, addNewUser, updateUser, deleteUser };
