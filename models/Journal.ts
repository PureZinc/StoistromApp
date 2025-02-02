import Model from "./utils/Model";
import randomPromptGenerator from "./utils/prompts";


export type JournalTypeNames = 'EmptyPage' | 'RandomPrompt'
interface JournalTypeDetails {
    name: JournalTypeNames
    description: string
    promptGenerator: () => string[]
}

const allJournalTypes: JournalTypeDetails[] = [
    {
        name: 'EmptyPage',
        description: 'Gives you a free page to write about',
        promptGenerator: () => ["empty"]
    },
    {
        name: 'RandomPrompt',
        description: 'Generates a random prompt to ponder on',
        promptGenerator: () => [randomPromptGenerator()]
    }
]


class JournalPage extends Model {
    constructor(
        public fromJournalId: number,
        public fromJournalType: JournalTypeNames,

        public prompt: string,
        public entry: string,
        public pageNum: number,
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
        public journalType: JournalTypeNames,
    ) { }

    static getAllJournalTypes() {
        return allJournalTypes;
    }

    getJournalTypeDetails(): JournalTypeDetails | undefined {
        return allJournalTypes.find(type => type.name === this.journalType);
    }

    writePage(prompt: string, entry: string): void {
        const numPages = this.pages.length;
        const typeDetails = this.getJournalTypeDetails();
        const newPrompts = typeDetails?.promptGenerator()
        if (newPrompts) {
            if (newPrompts.length <= numPages) { return; }
            prompt = newPrompts[numPages];
        }

        const page = new JournalPage(this.id, this.journalType, prompt, entry, numPages);
        this.pages.push(page);
    }

    save() {
        this.pages.forEach(page => page.save())
    }

    static async retrieve(id: number): Promise<Journal> {
        const pages = await JournalPage.retrieve<JournalPage>({ fromJouralId: id });
        const sortedPages = pages.sort((a, b) => a.pageNum - b.pageNum);
        return new Journal(id, sortedPages, sortedPages[0].fromJournalType);
    }
}