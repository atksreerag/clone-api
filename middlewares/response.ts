import winston from 'winston';
import response from '../config/response';

interface ApiResponse {
  status: string;
  statusCode: number;
  message: string;
  data: Record<string, any>;
}

const createApiResponse = (
  status: string = 'success',
  message: string = '',
  data: Record<string, any> = {},
  status_code: number = 0
): ApiResponse | null => {
  try {
    if (status === 'success') {
      response.success.message = message ? message : 'Operation Successful';
      response.success.statusCode = status_code ? status_code : 200;
      response.success.data = data;
      return response.success;
    }
    
    response.error.message = message ? message : 'Operation Failed';
    response.error.statusCode = status_code ? status_code : 400;
    response.error.data = data;
    return response.error;
  } catch (error) {
    winston.error('Response Middleware Error', error);
    return null;
  }
};

export default createApiResponse;
