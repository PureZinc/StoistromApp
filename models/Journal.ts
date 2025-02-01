import Model from "./utils/Model";
import randomPromptGenerator from "./utils/prompts";


class JournalPage extends Model {
    constructor(
        public fromJournalId: number,
        public prompt: string,
        public entry: string,
        public dateWritten: Date = new Date(),
        public lastEdited: Date | null = null
    ) { 
        super();
    }
}

export default class Journal {
    constructor(
        public id: number,
        public pages: JournalPage[],
        public journalType: 'EmptyPage' | 'RandomPrompt',
    ) { }
    
    writePage(prompt: string, entry: string): void {
        if (this.journalType === 'RandomPrompt') {
            prompt = randomPromptGenerator();
        }
        const page = new JournalPage(this.id, prompt, entry);
        this.pages.push(page);
    }

    toJSON() {
        return this.pages.map(page => page.toJSON());
    }
}