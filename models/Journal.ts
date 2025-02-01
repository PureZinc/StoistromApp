import Model from "./utils/Model";

export default class Journal extends Model {
    constructor(
        public prompt: string,
        public entry: string,
        public dateWritten: Date = new Date(),
        public lastEdited: Date | null = null
    ) { 
        super();
    }
}
