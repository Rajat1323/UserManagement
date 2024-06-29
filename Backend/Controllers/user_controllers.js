const User = require("../Models/user");

User.sync();

// insert user details to database
const save = (req, res) => {
  const new_user = {
    fullName: req.body.fullName,
    userName: req.body.userName,
    password: req.body.password,
    mobile: req.body.mobile,
    role: req.body.role,
  };
  User.create(new_user)
    .then((result) => {
      return res.status(201).json({
        message: "User Added Successfully",
        id: result.id,
      });
    })
    .catch((errors) => {
      return res.status(500).json({
        message: errors.errors[0].message
          ? errors.errors[0].message
          : "Something went wrong",
        errors: errors,
      });
    });
};

// fetch user details by id
const userById = (req, res) => {
  User.findByPk(req.params.id)
    .then((result) => {
      if (!result)
        return res.status(201).json({
          message: "User Fatched By Id Successfully",
        });
      else
        return res.status(201).json({
          message: "User Not Found",
        });
    })
    .catch((errors) => {
      return res.status(500).json({
        message: errors.errors[0].message
          ? errors.errors[0].message
          : "Something went wrong",
        error: errors,
      });
    });
};
//fetch all user details
const index = (req, res) => {
  User.findAll()
    .then((result) => {
      if (result) return res.status(201).json(result);
      else return res.status(404).json("No User Found");
    })
    .catch((errors) => {
      return res.status(500).json({
        message: errors.errors[0].message
          ? errors.errors[0].message
          : "Something went wrong",
        error: errors,
      });
    });
};
//patch user details
const update = (req, res) => {
  const id = req.params.id;
  const update_user = {
    fullName: req.body.fullName,
    userName: req.body.userName,
    mobile: req.body.mobile,
  };
  User.update(update_user, { where: { id: id } })
    .then((result) => {
      if (result)
        return res.status(201).json({
          message: "User Update Successfully",
        });
      else
        return res.status(404).json({
          message: "User Not Found",
        });
    })
    .catch((errors) => {
      return res.status(500).json({
        message: errors.errors[0].message
          ? errors.errors[0].message
          : "Something went wrong",
        error: errors,
      });
    });
};
//delete user
const drop = (req, res) => {
  const id = req.params.id;
  console.log(id);
  User.destroy({ where: { id: id } })
    .then((result) => {
      if (result)
        return res.status(201).json({
          message: "User deleted Successfully",
        });
      else
        return res.status(404).json({
          message: "User Not Found",
        });
    })
    .catch((errors) => {
      return res.status(500).json({
        message: errors.errors[0].message
          ? errors.errors[0].message
          : "Something went wrong",
        error: errors,
      });
    });
};

module.exports = { save, userById, index, update, drop };
