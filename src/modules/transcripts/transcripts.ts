import { Request, Response, NextFunction } from "express";
import { meetBuilder } from "@config";
import { ErrorHandler } from "@errors";

export class TranscriptsController {
  static async GetAllTranscripts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { conferenceName } = req.query;

      const result = await meet.conferenceRecords.transcripts.list({
        parent: String(conferenceName),
      });

      res.status(200).json({
        success: true,
        message: 'Konferensiya transkriptlari olindi',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async GetTranscriptByName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { transcriptName } = req.params;

      const result = await meet.conferenceRecords.transcripts.get({
        name: String(transcriptName),
      });

      res.status(200).json({
        success: true,
        message: 'Transkript haqida ma\'lumot olindi',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async GetAllTranscriptEntries(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { transcriptName } = req.params;

      const result = await meet.conferenceRecords.transcripts.entries.list({
        parent: String(transcriptName),
      });

      res.status(200).json({
        success: true,
        message: 'Transkript yozuvlari olindi',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }
}
