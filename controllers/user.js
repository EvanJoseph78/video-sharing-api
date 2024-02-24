import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    console.log("Passou Aqui!" + req.params.id);
    console.log("Passou Aqui!" + req.user.id);
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "Você só pode alterar a sua conta!"));
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    console.log("Passou Aqui!" + req.params.id);
    console.log("Passou Aqui!" + req.user.id);
    try {
      await User.findOneAndDelete(
        req.params.id,
      );
      res.status(200).json("Usuário deletado com sucesso!");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "Você só pode deletar a sua conta!"));
  }

}

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
}

export const getAllUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
}

export const subscribe = async (req, res, next) => {
  console.log("Passou Aqui!");
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });

    res.status(200).json("Inscrição realizada com sucesso!");
  } catch (err) {
    next(err);
  }
}

export const unsubscribe = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });

    res.status(200).json("Inscrição realizada com sucesso!");
  } catch (err) {
    next(err);
  }
}



export const like = async (req, res, next) => {

}
export const dislike = async (req, res, next) => {

}

