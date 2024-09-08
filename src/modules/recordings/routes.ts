import { Router } from "express";
import { RecordingsController } from "./recordings";
import { getConferenceRecordingByNameDto, getConferenceRecordingsDto, validate } from "@middlewares";

const RecordingsRouter = Router()

RecordingsRouter
    .get('/all', validate(getConferenceRecordingsDto, "query"), RecordingsController.GetAllRecordings)
    .get('/get-by-name', validate(getConferenceRecordingByNameDto, "query"), RecordingsController.GetRecordingByName)


export {RecordingsRouter}