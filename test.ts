import {EventEmitter} from "./index";

interface Events {
    multiArray: [boolean, boolean];
    multiOptionalArray: [boolean, boolean?];
}

class Test<E extends Events = Events> {

    /**
     * If the second line is uncommented, all unexpected errors are resolved.
     */
    private readonly ee: EventEmitter<E> = new EventEmitter();
    //private readonly ee: EventEmitter<Events> = new EventEmitter();

    constructor() {
        this.ee.normal(b => {}); // No error
        this.ee.normal((b, b2) => {}); // No error
        this.ee.normal((b, b2, b3) => {}); // Expected error

        this.ee.rest(b => {}); // No error
        this.ee.rest((b, b2) => {}); // No error
        this.ee.rest((b, b2, b3) => {}); // Expected error

        this.ee.restGenerics("multiArray", b => {}); // No error
        this.ee.restGenerics("multiArray", (b, b2) => {}); // No error
        this.ee.restGenerics("multiArray", (b, b2, b3) => {}); // Expected error

        this.ee.restConditional("multiArray", (b: boolean) => {}); // Unexpected error
        this.ee.restConditional("multiArray", (b, b2) => {}); // No error
        this.ee.restConditional("multiArray", (b, b2, b3) => {}); // Expected error

        this.ee.restConditional("multiOptionalArray", (b: boolean) => {}); // Unexpected error
        this.ee.restConditional("multiOptionalArray", (b, b2?) => {}); // No error
        this.ee.restConditional("multiOptionalArray", (b, b2) => {}); // Expected error
    }

}
