import { Router } from "express";
import {MeetSpacesController} from "./meetSpaces";
import { endActiceConferenceDto, getMeetSpaceByNameDto, validate } from "@middlewares";

const MeetSpacesRouter = Router()

MeetSpacesRouter
    .get('/get-by-name', validate(getMeetSpaceByNameDto, "query"), MeetSpacesController.GetMeetSpaceByName)
    .post('/create', MeetSpacesController.CreateMeetSpace)
    .delete('/end-active-conference', validate(endActiceConferenceDto), MeetSpacesController.EndActiveConference)

export {MeetSpacesRouter}