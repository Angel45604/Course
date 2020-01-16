import { Schedule } from './schedule';
export class User {
    name: string;
    email: string;
    id: string;
    courses:Array<string>;
    schedule: Array<Schedule>
}