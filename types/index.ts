export type GenericElements =
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[];

export type THPositions = "left" | "right";

//

export interface BusinessHours {
  monday: TimeSlot[];
  tuesday: TimeSlot[];
  wednesday: TimeSlot[];
  thursday: TimeSlot[];
  friday: TimeSlot[];
  saturday: TimeSlot[];
  sunday: TimeSlot[] | "Closed";
}

export interface FilterState {
  availability: ("open" | "appointment" | "24/7")[];
  minRating: number;
  pricing: {
    type: ("flat" | "hourly" | "call" | "startDate")[];
    range: ("under-70" | "70-100" | "over-100")[];
  };
  supportType: ("remote" | "instore" | "house" | "pickup")[];
  usageType: ("personal" | "business")[];
  paymentMethods: string[];
  employeeStrength: string[];
  yearsInBusiness: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: Date;
  isViewed: boolean;
}

export interface TimeSlot {
  open: string;
  close: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  status: {
    type: "open" | "closed" | "opens_at";
    time?: string;
  };

  hours: BusinessHours;
  pricing: {
    type: "flat" | "hourly" | "call";
    amount?: number;
    note?: string;
  };
  distance: string;
  yearFounded: number;
  description: string;
  badges: string[];
  imageUrl: string;
}
