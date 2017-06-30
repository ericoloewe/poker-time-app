import {
    Repository
} from "./repository";

/**
 * @description repository
 */
export class TournamentRepository extends Repository {
    save() {
        super.save("LALA");
    }
}