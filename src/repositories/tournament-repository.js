import { Repository } from "./repository";
import { Logger } from "../configs/index";

const LOGGER = new Logger(TournamentRepository);

/**
 * @description repository
 */
export class TournamentRepository extends Repository {
    save(tournament) {
        try {
            super.save(tournament);
        } catch(ex) {
            LOGGER.error("We had some erro to save tournament", ex);
        }
    }

    get() {
        return super.get();
    }

    list() {
        return super.list();
    }
}