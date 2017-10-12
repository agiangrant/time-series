export interface DataPoint {
    observationTS: Date;
    tagId: string;
    value: number;
    quality: boolean;
}