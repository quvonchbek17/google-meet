import Joi from "joi";

export const getConferenceRecordingsDto = Joi.object().keys({
    conferenceName: Joi.string().pattern(/^conferenceRecords\//).required()
});

export const getConferenceRecordingByNameDto = Joi.object().keys({
    recordingName: Joi.string().required()
});