import { Router } from "express";
import { ParticipantsController } from "./participants";
import { getConferenceParticipantsDto, getParticipantByNameDto, getParticipantSessionsDto, validate } from "@middlewares";

const ParticipantsRouter = Router()

ParticipantsRouter
    .get('/all', validate(getConferenceParticipantsDto, "query"), ParticipantsController.GetAllParticipants)
    .get('/get-by-id', validate(getParticipantByNameDto, "query"), ParticipantsController.GetParticipantByName)
    .get('/get-participant-sessions', validate(getParticipantSessionsDto, "query"), ParticipantsController.GetAllParticipantSessions)

export {ParticipantsRouter}