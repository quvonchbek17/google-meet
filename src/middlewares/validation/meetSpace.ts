import Joi from "joi";

export const getMeetSpaceByNameDto = Joi.object().keys({
    spaceName: Joi.string().pattern(/^spaces\//).required()
});

export const endActiceConferenceDto = Joi.object().keys({
    spaceName: Joi.string().pattern(/^spaces\//).required()
});
