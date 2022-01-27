export interface IResult<T> {
  code: number;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  }
}
