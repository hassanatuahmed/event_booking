import Router from "koa-router";

const users = [
  {
    id: 1,
    firstName: "Hasanna",
    lastName: "Ahmed",
    dob: "16-04-1997",
    country: "Ghana",
  },
  {
    id: 2,
    firstName: "Saeed",
    lastName: "Issah",
    dob: "18-11-1992",
    country: "Ghana",
  },
];

let lastId = 2;

const userRoutes = new Router({
  prefix: "/users",
});

userRoutes.get("/:id", (ctx, next) => {
  const id = ctx.params.id;
  const user = users.find((user) => user.id === Number(id));
  if (user) {
    ctx.body = {
      user,
      message: "User was found",
    };
  } else {
    ctx.body = {
      message: `User with id ${id} was not found!`,
    };
    ctx.status = 404;
  }

  next();
});

userRoutes.post("/", (ctx, next) => {
  const payload = ctx.request.body as {
    firstName: "string";
    lastName: "string";
    dob: "string";
    country: "string";
  };
  if (
    !payload ||
    !payload.firstName ||
    !payload.lastName ||
    !payload.dob ||
    !payload.country
  ) {
    ctx.body = {
      message: `firstName, lastName, dob and country are required to create a user!`,
    };
    ctx.status = 400;
  } else {
    users.push({
      ...payload,
      id: ++lastId,
    });
    ctx.body = {
      message: `${payload.firstName} was successfully created`,
    };
  }
  next();
});

userRoutes.get("/", (ctx, next) => {
  ctx.body = { users };
  next();
});

// http://localhost:9090/users
// http://localhost:9090/users/name?
// http://localhost:9090/users/:location/name

export default userRoutes;
