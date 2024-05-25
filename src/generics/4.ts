namespace UserName {
  export type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
}

function createOrUpdateUser(
  initialValues: Partial<UserName.User>
): Partial<UserName.User> {
  const defaultUser: UserName.User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
