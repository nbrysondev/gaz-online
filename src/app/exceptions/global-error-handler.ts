import { ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error) {
     console.log('Error caught');

     // IMPORTANT: Rethrow the error otherwise it gets swallowed
     throw error;
  }
  
}