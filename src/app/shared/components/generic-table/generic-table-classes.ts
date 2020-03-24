export class Head {
  title: string;
  index: string;
  type?: string; // TEXT | SPAN | MONTH_YEAR.
  options?: any;
}

export class Action {
  type: string; // EDITE | DELETE | SEND | DOWNLOAD.
  icon: string;
  permissions?: string | string[];
  conditions?: string | string[];
  helpMessage?: string;
}

export class Page {
  number: number;
  limit: number;
  totalElements: number;
  constructor(page?: Page) {
    if (page) {
      this.number = page.number;
      this.limit = page.limit;
      this.totalElements = page.totalElements;
    }
  }
}

export class Table {
  header: Head[];
  actions: Action[];
  data: any;
  page?: Page;
}
