const dataBase = [];

const getAll = async () =>
  // TODO: mock implementation. should be replaced during task development
  // [];

  dataBase;

const addNewUser = async (newUser) => {
  dataBase.push(newUser);
};

module.exports = { getAll, addNewUser };
