import { Router } from "express";
import {ConferencesController} from "./conferences";
import { getConferenceBySpaceNameDto, validate } from "@middlewares";

const ConferencesRouter = Router()

ConferencesRouter
    .get('/all', ConferencesController.GetAllConferences)
    .get('/get-by-space-name', validate(getConferenceBySpaceNameDto, "query"), ConferencesController.GetConferenceBySpaceName)

export {ConferencesRouter}