declare module 'papaparse' {
  export interface ParseConfig {
    header?: boolean;
    skipEmptyLines?: boolean;
    complete?: (results: ParseResult) => void;
    error?: (error: Error) => void;
  }

  export interface ParseResult {
    data: any[];
    errors: any[];
    meta: {
      delimiter: string;
      linebreak: string;
      aborted: boolean;
      truncated: boolean;
      cursor: number;
      fields?: string[];
    };
  }

  export function parse(file: File, config?: ParseConfig): void;
}