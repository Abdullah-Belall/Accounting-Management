import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { CustomRequest } from 'src/utils/interfaces';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: CustomRequest, res: Response, next: () => void) {
    const accessToken = req.headers.authorization?.split(' ')[1];

    if (!accessToken) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const verify: any = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
      );
      delete verify.iat;
      delete verify.exp;
      req.user = verify;

      if (req.user.role !== 'boss') {
        return res.status(403).json({ message: 'Forbidden: Not allowed' });
      }

      next();
    } catch {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
}
