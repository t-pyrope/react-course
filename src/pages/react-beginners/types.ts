export interface Lesson {
  title: string;
  path: string;
}

export interface Step {
  label: string;
  path: string;
  lessons: Lesson[];
}
