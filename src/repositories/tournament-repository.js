import { Repository } from "./repository";
import { Logger } from "../configs/index";

const LOGGER = new Logger(TournamentRepository);

/**
 * @description repository
 */
export class TournamentRepository extends Repository {
    save(tournament) {
        return super.save(tournament);
    }

    get(id) {
        return super.get(id);
    }

    list(from, to, sort) {
        return super.list(from, to, sort);
    }

    remove(id) {
        return super.remove(id);
    }
}