
declare type TextFormats = (
  'clear' |
  'bold' | 
  'italic' | 
  'upperCase' | 
  'spaceToUnderscore' | 
  'lowerCase' | 
  'upperAndLower'
);

declare type CloseEvent   = () => void;
declare type BoldEvent = (text: string) => void;
declare type ItalicEvent = (text: string) => void;
declare type UpperCaseEvent = (text: string) => void;

declare interface ToolEvent<T> {
  action: T;
}