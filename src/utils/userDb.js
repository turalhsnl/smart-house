export const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };
  
  export const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  export const findUser = (username, password) => {
    const users = getUsers();
    return users.find((u) => u.username === username && u.password === password);
  };
  
  export const userExists = (username) => {
    const users = getUsers();
    return users.some((u) => u.username === username);
  };
  