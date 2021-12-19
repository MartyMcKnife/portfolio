import { IconType } from "react-icons";

export interface toolsList {
  Frontend: Array<tool>;
  Backend: Array<tool>;
  Misc: Array<tool>;
}

export interface tool {
  name: string;
  Icon: IconType;
  description: string;
  //In years
  timeUsing: number;
  //In stars (out of 5)
  confidence: number;
}
