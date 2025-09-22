export interface Position {
  line: number;
  character: number;
}

export interface AlpineMapping {
  expressionId: string;
  expression: string;
  directiveName: string;
  htmlExpressionStart: Position;
  htmlExpressionEnd: Position;
  modifiers?: string[];
  parentData?: string;
  loopContext?: any[];
}

export interface TransformationResult {
  tsContent: string;
  mappings: AlpineMapping[];
}

export function transformHtmlToTypeScript(htmlContent: string): TransformationResult;
export function findAlpineDirectives(htmlContent: string): any[];
export function parseForExpression(forValue: string): any;
export function extractXDataProperties(xDataContent: string): string[];