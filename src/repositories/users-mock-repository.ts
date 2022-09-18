import { UsersRepository } from './users-repository.interface';
import { User } from '../interfaces/user.interface';
import shortid from 'shortid';

export class UsersMockRepository implements UsersRepository {
    private users: Array<User> = [];
    addItem(item: User): User {
        item.id = shortid.generate();
        item.role = item.role;
        this.users.push(item);
        return item;
    }
    updateItem(id: string, item: User): User {
        this.users = this.users.map(i => {
            if (i.id === id) {
                return {
                    ...item,
                    id: i.id,
                    role: i.role,
                    updatedAt: new Date()
                };
            }
            return i;
        });
        return this.getItemById(id);
    }
    deleteItem(id: string): boolean {
        this.users = this.users.filter(i => i.id !== id);
        return true;
    }
    getItemById(id: string): User {
        return this.users.find(i => i.id === id);
    }
    getAllItems(): Array<User> {
        return this.users;
    }
    getItemByRole(role: string): User {
        return this.users.find(i => i.role === role);
    }

    findUserByFirstName(name: string): User {
        return this.users.find(i => i.firstName === name);
    }
}
