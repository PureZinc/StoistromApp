import Model from "./utils/Model";

export default class Habit extends Model {
    private lastChecked: Date | null = null;
    private  durationTranslation = {
        daily: 1,
        weekly: 7,
        monthly: 30,
        yearly: 365
    };

    constructor(
        public name: string,
        public duration: 'daily' | 'weekly' | 'monthly' | 'yearly',
        public isGood: boolean,
        public timeLogs: Date[] = [],

        private durationLength: number,
        private startDate: Date = new Date()
    ) { 
        super();
        durationLength = this.durationTranslation[this.duration];
    }
    
    private getDaysBetween(date1: Date, date2: Date): number {
        const diffTime = date2.getTime() - date1.getTime();
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    }
    
    isHabitDue(): boolean {
        if (!this.isGood) { return false; }

        const today = new Date();
        const lastDate = this.lastChecked ?? this.startDate;
        const daysPassed = this.getDaysBetween(lastDate, today);
        return daysPassed > this.durationLength;
    }

    checkHabit(): void {
        const now = new Date(); 
        this.lastChecked = now;
        this.timeLogs.push(now);
        console.log(`${this.name} checked at ${now.toLocaleString()}`)
    }

    uncheckHabit(): void {
        if (this.timeLogs.length > 0) {
            const removedLog = this.timeLogs.pop();
            this.lastChecked = this.timeLogs.length > 0 ? this.timeLogs[this.timeLogs.length - 1] : null;
            console.log(`Unchecked: Removed log at ${removedLog?.toLocaleString()}`);
        } else {
            console.log(`No logs to remove.`);
        }
    }

    private daysSinceLastOccurrence(): number {
        if (!this.lastChecked) return this.getDaysBetween(this.startDate, new Date());
        return this.getDaysBetween(this.lastChecked, new Date());
    }

    hasAvoidedFor(duration: number): boolean {
        return this.daysSinceLastOccurrence() >= duration;
    }

    getStreak(): number {
        if (!this.isGood) {
            return this.daysSinceLastOccurrence();
        } else {
            return 5 // This will be actual streak later
        }
    }
}
