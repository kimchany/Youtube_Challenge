import express from "express";
import routes from "../routes";
import {
  postResisterView,
  postAddComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.resisterView, postResisterView);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
