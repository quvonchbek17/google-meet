import Joi from "joi";

export const getConferenceParticipantsDto = Joi.object().keys({
    conferenceName: Joi.string().pattern(/^conferenceRecords\//).required()
});


export const getParticipantByNameDto = Joi.object().keys({
    participantName: Joi.string().required()
});

export const getParticipantSessionsDto = Joi.object().keys({
    participantName: Joi.string().required()
});
