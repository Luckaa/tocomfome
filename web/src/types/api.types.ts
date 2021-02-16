export interface Report {
    name: string;
    message: string;
}

export interface Result {
    data: any;
    message: string;
    success: boolean;
    errors: Report[];
  }