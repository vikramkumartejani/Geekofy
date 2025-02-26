export type GenericElements =
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[];

export type THPositions = "left" | "right";

//
export interface ServiceProvider {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  status: {
    type: "open" | "closed" | "opens_at";
    time?: string;
  };
  hours: {
    open: string;
    close: string;
  };
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

export interface FilterState {
  availability: ("open" | "appointment" | "24/7")[];
  minRating: number;
  pricing: {
    type: ("flat" | "hourly" | "call")[];
    range: ("under-70" | "70-100" | "over-100")[];
  };
  supportType: ("remote" | "instore" | "house" | "pickup")[];
  usageType: ("personal" | "business")[];
  paymentMethods: string[];
  employeeStrength: string;
  yearsInBusiness: number;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: Date;
}

export interface BusinessHours {
  monday: TimeSlot[];
  tuesday: TimeSlot[];
  wednesday: TimeSlot[];
  thursday: TimeSlot[];
  friday: TimeSlot[];
  saturday: TimeSlot[];
  sunday: TimeSlot[] | "Closed";
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
  hours: {
    open: string;
    close: string;
  };
  // hours: BusinessHours;
  pricing: {
    type: "flat" | "hourly" | "call";
    amount?: number;
    note?: string;
  };
  distance: string;
  yearFounded: number;
  description: string;
  fullDescription: string;
  badges: string[];
  imageUrl: string;
}

//
// export interface ServiceProvider {
//   id: string;
//   name: string;
//   rating: number;
//   totalReviews: number;
//   status: string;
//   openHours: {
//     open: string;
//     close: string;
//   };
//   distance: string;
//   price: number;
//   description: string;
//   imageUrl: string;
//   badges: string[];
// }

// export interface FilterState {
//   availability: string[];
//   minRating: number;
//   priceRange: string[];
//   supportType: string[];
//   paymentMethods: string[];
//   employeeStrength: string;
//   yearsInBusiness: number;
// }
