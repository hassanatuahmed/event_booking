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

userRoutes.get("/get-date", (ctx, next) => {
  ctx.body = {
    date: new Date(),
  };
  next();
});

userRoutes.patch("/:id", (ctx, next) => {
  const id = ctx.params.id;
  if (isNaN(Number(id))) {
    ctx.status = 400;
    ctx.body = { error: "Id should be a number" };
  } else {
    const user = users.find((myUser) => {
      return myUser.id == Number(id);
    });
    const payload = ctx.request.body as {
      firstName: string;
      lastName: string;
    };

    if (user) {
      if (payload.firstName) {
        user.firstName = payload.firstName;
        ctx.body = { message: `${user.firstName} was successfully updated` };
      }
      if (payload.lastName) {
        user.firstName = payload.firstName;
        ctx.body = { message: "field updated" };
      }
    } else {
      ctx.body = { error: "User not found" };
    }
    next();
  }
});

userRoutes.put("/:id", (ctx, next) => {
  const id = ctx.params.id;
  if (isNaN(Number(id))) {
    ctx.status = 400;
    ctx.body = { error: "Id should be a number" };
  } else {
    const user = users.find((myUser) => {
      return myUser.id == Number(id);
    });

    const payload = ctx.request.body as {
      firstName: string;
      lastName: string;
    };

    if (!payload.firstName || !payload.lastName) {
      ctx.body = { message: "both first name and last name is required" };
    } else {
      if (!user) {
        ctx.body = { message: "User Not Found" };
      } else {
        user.firstName = payload.firstName;
        user.lastName = payload.lastName;
        ctx.body = {
          message: "User updated",
        };
      }
    }

    next();
  }
});

// http://localhost:9090/users
// http://localhost:9090/users/name?
// http://localhost:9090/users/:location/name

export default userRoutes;
