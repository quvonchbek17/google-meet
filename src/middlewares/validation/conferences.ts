import Joi from "joi";

export const getConferenceBySpaceNameDto = Joi.object().keys({
    space: Joi.string().pattern(/^spaces\//).required()
});
