import { Router } from "express";
import { TranscriptsController } from "./transcripts";
import { getConferenceBySpaceNameDto, getConferenceTranscriptByNameDto, getConferenceTranscriptsDto, validate } from "@middlewares";

const TranscriptsRouter = Router()

TranscriptsRouter
    .get('/all', validate(getConferenceTranscriptsDto, "query"), TranscriptsController.GetAllTranscripts)
    .get('/get-by-name', validate(getConferenceTranscriptByNameDto, "query"), TranscriptsController.GetTranscriptByName)
    .get('/get-all-entries', validate(getConferenceTranscriptByNameDto, "query"), TranscriptsController.GetTranscriptByName)


export {TranscriptsRouter}