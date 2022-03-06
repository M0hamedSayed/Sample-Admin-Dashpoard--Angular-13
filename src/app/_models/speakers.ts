export class Speakers {

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public image: string,
        public address: { city: string, building: number, street: number },
        public bDate: string,
        public hourRate: number,
        public isMarried: boolean,
        public government: string,
        public email: string,
        public activated: boolean,
        public role: string,
        public rating: number
    ) {

    }
}
