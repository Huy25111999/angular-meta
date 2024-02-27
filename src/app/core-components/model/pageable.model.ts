export class PageableModel {
  total: number;
  pageSize: number;
  pageIndex: number;
  sortField: any;
  direction: any;
  constructor() {
    this.total = 10;
    this.pageSize = 10;
    this.pageIndex = 1;
    this.direction = 'DESC';
  }
}
