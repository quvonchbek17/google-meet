import { Request, Response, NextFunction } from "express";
import { meetBuilder } from "@config";
import { ErrorHandler } from "@errors";

export class MeetSpacesController {
  static async GetMeetSpaceByName(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { spaceName } = req.query;

      const result = await meet.spaces.get({ name: String(spaceName) });

      res.status(200).json({
        success: true,
        message: 'Meeting space haqida ma\'lumot olindi',
        data: result.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async CreateMeetSpace(req: Request, res: Response, next: NextFunction): Promise<void>{
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      const { name } = req.body;

      const response = await meet.spaces.create();
      res.status(200).json({
        success: true,
        message: 'Yangi meeting space muvaffaqiyatli yaratildi',
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async EndActiveConference(req: Request, res: Response, next: NextFunction): Promise<void>{
    try {
      const token = req.headers.access_token as string;
      const meet = await meetBuilder(token);

      let { spaceName } = req.body

      const response = await meet.spaces.endActiveConference({
        name: spaceName
      });
      res.status(200).json({
        success: true,
        message: 'Meeting tugatildi',
        data: response.data,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

}
