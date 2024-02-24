import Video from "../models/Video.js";
import { createError } from "../error.js";
import User from "../models/User.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body })
  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }

}

export const updatedVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video não encontrado!"));
    if (req.user.id === video.userId) {
      const updatedUser = await Video.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedVideo)
    } else {
      return next(createError(403, "Você pode editar apenas o seu vídeo!"));
    }

  } catch (err) {
    next(err);
  }

}

export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video não encontrado!"));
    if (req.user.id === video.userId) {
      await Video.findByIdAndDelete(
        req.params.id,
      );
      res.status(200).json("O vídeo foi deletado!")
    } else {
      return next(createError(403, "Você pode deletar apenas o seu vídeo!"));
    }

  } catch (err) {
    next(err);
  }

}

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
}

export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(
      req.params.id,
      { $inc: { view: 1 } }
    );
    res.status(200).json("As views foram aumentadas!");
  } catch (err) {
    next(err);
  }
}

export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const list = Promise.all(
      subscribedChannels.map(channelId => {
        return Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
}

export const trend = async (req, res, next) => {
  try {
    const videos = await Video.findById().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
}

export const random = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
}

