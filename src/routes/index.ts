import { verifyAccessToken } from "@middlewares"
import { AuthRouter, ConferencesRouter, MeetSpacesRouter, ParticipantsRouter, RecordingsRouter, TranscriptsRouter} from "@modules"

import { Router } from "express"

const router = Router()

router.use("/auth", AuthRouter)
router.use("/meet-spaces", verifyAccessToken, MeetSpacesRouter)
router.use("/conferences", verifyAccessToken, ConferencesRouter)
router.use("/participants", verifyAccessToken, ParticipantsRouter)
router.use("/recordings", verifyAccessToken, RecordingsRouter)
router.use("/transcripts", verifyAccessToken, TranscriptsRouter)


export default router