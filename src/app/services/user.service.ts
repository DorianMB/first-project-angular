import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    {
      firstName: 'Dorian',
      lastName: 'Marques',
      email: 'dorian@marques.com',
      drinkPref: 'Coca',
      hobbies: ['sports', 'jeux-vidéos', 'voyages']
    },
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
