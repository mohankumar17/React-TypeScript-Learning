export type GreetProps = {
  children: string;
  name?: string;
  msgCount?: number; //Optional
  status: "up" | "down";
};
