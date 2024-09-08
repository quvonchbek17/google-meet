import { Request, Response, NextFunction } from "express";
import { meetBuilder } from "@config";
import { ErrorHandler } from "@errors";

export class ConferencesController {
  static async GetAllConferences(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const result = await meet.conferenceRecords.list()

      res.status(200).json({
        success: true,
        message: 'Konferensiyalar',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async GetConferenceBySpaceName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      let { space } = req.query

      const result = await meet.conferenceRecords.get({
        name: String(space)
      })

      res.status(200).json({
        success: true,
        message: 'Konferensiyalar',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

}
