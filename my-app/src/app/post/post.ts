export interface IBlogs {
  authorname: string;
  title: string;
  Post: string;
  id: number;
}

export class Blogs implements IBlogs {
  constructor(
    public authorname: string,
    public title: string,
    public Post: string,
    public id: number
   ){}

  // public  CalculateDiscount(percent: number): number {
  //    return this.price - (this.price * percent / 100);
  //
  //  }
}
