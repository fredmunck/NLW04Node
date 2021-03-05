import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User) //Define que esta classe será um repositório
class UsersRepository extends Repository<User> { } // gera a herança da classe 'Repository' do typeorm.

export { UsersRepository }