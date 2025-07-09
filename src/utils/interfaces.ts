import { Request } from 'express';

export interface CustomRequest extends Request {
  user?: WorkerTokenInterface;
}
export interface WorkerTokenInterface {
  id: string;
  user_name: string;
  role: 'boss';
}
