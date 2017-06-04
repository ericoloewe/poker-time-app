import { TryLuckAction } from "../actions/index";
import { VALUES } from '../configs/index';
import { RandomUtils } from '../utils/index';

/**
 * @description reducers for routes
 */
export class TryLuckReducer {
    constructor() {
        this._defaultState = {
            luck: {}
        };
    }

    /**
     * @description generate
     */
    generate() {
        return (state = this._defaultState, action) => {
            switch (action.type) { 
                case TryLuckAction.TRY_LUCK: {
                    state = this.tryLuck(state);
                    break;
                }
            }

            return state;
        };
    }

    /**
     * @description try luck
     */    
    tryLuck(state) {
        let cards = Object.keys(VALUES.CARDS);
        let randomCardIndex = RandomUtils.getRandomInt(0, cards.length - 1);
        let suits = Object.keys(VALUES.SUITS);
        let randomSuitIndex = RandomUtils.getRandomInt(0, suits.length - 1);

        return Object.assign(state, {
            luck: {
                card: cards[randomCardIndex],
                nipe: VALUES.SUITS[suits[randomSuitIndex]].CODE
            }
        });
    }
}
