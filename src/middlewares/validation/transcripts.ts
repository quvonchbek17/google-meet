import Joi from "joi";

export const getConferenceTranscriptsDto = Joi.object().keys({
    conferenceName: Joi.string().pattern(/^conferenceRecords\//).required()
});

export const getConferenceTranscriptByNameDto = Joi.object().keys({
    transcriptName: Joi.string().required()
});