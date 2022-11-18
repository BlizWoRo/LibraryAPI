export * from './authorController.service';
import { AuthorControllerService } from './authorController.service';
export * from './bookController.service';
import { BookControllerService } from './bookController.service';
export const APIS = [AuthorControllerService, BookControllerService];
