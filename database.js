const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

const todosDatabase = (() => {
  let idSequence = 4;
  const todos = {
    1: { id: 1, title: "Dar a aula", completed: true },
    2: { id: 2, title: "Estudar Node.js", completed: true },
    3: { id: 3, title: "Revisar código", completed: false }
  };

  const insert = async (todo) => {
    await wait(500);
    const id = idSequence++;
    const data = { id,...todo };
    todos[id] = data;
    return data;
  };

  const list = async () => {
    await wait(100);
    return Object.values(todos);
  };

  const get = async (id) => {
    await wait(100);
    return todos[id];
  };

  const update = async (todo) => {
    await wait(500);
    todos[todo.id] = todo;
    return todo;
  };

  const del = async (id) => {
    await wait(500);
    delete todos[id];
  };

  return {
    insert,
    list,
    get,
    update,
    del
  };
})();

module.exports = todosDatabase;
