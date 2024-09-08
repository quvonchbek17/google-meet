import { Request, Response, NextFunction } from "express";
import { meetBuilder } from "@config";
import { ErrorHandler } from "@errors";

export class RecordingsController {
  static async GetAllRecordings(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { conferenceName } = req.query;

      const result = await meet.conferenceRecords.recordings.list({
        parent: String(conferenceName),
      });

      res.status(200).json({
        success: true,
        message: 'Konferensiya yozuvlari olindi',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async GetRecordingByName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { recordingName } = req.params;

      const result = await meet.conferenceRecords.recordings.get({
        name: String(recordingName),
      });

      res.status(200).json({
        success: true,
        message: 'Yozuv haqida ma\'lumot olindi',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }
}
