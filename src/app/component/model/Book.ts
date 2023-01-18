export class Book{

    constructor(
        public bookId : number,
        public bookName : string,
        public category : string,
        public price : number,
        public author : string,
        public block : boolean,
        public subscribe : number,
        public publisher : string,
        public publishedDate : Date
    ){

    }
}