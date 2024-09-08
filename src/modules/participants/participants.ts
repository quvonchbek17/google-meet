import { Request, Response, NextFunction } from "express";
import { meetBuilder } from "@config";
import { ErrorHandler } from "@errors";

export class ParticipantsController {
  static async GetAllParticipants(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { conferenceName } = req.query;

      const result = await meet.conferenceRecords.participants.list({
        parent: String(conferenceName),
      });

      res.status(200).json({
        success: true,
        message: "Konferensiyadagi ishtirokchilar muvaffaqiyatli olindi",
        data: result.data.participants,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async GetParticipantByName(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { participantName } = req.query;

      const result = await meet.conferenceRecords.participants.get({
        name: String(participantName),
      });

      res.status(200).json({
        success: true,
        message: "Ishtirokchi ma'lumotlari muvaffaqiyatli olindi",
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async GetAllParticipantSessions(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { participantName } = req.query;

      const result =
        await meet.conferenceRecords.participants.participantSessions.list({
          parent: String(participantName),
        });

        meet.conferenceRecords.recordings

      res.status(200).json({
        success: true,
        message: "Ishtirokchi sessiyalari muvaffaqiyatli olindi",
        data: result.data.participantSessions,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }
}
