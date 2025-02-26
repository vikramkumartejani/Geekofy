import type { BusinessHours } from "@/types";
import Modal from ".";

interface BusinessHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
  hours: BusinessHours;
  businessName: string;
}

interface TimeSlot {
  open: string;
  close: string;
}

export function BusinessHoursModal({
  isOpen,
  onClose,
  hours,
  businessName,
}: BusinessHoursModalProps) {
  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ];

  const formatHours = (timeSlots: TimeSlot[] | "Closed") => {
    if (timeSlots === "Closed") return "Closed";
    return timeSlots.map((slot) => `${slot.open} - ${slot.close}`).join(" & ");
  };

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <h2>Business Hours - {businessName}</h2>

      <div className="grid gap-4 py-4">
        {days.map(({ key, label }) => (
          <div key={key} className="grid grid-cols-2 items-center gap-4">
            <div className="text-sm font-medium">{label}</div>
            <div className="text-sm text-muted-foreground">
              {formatHours(hours[key as keyof BusinessHours])}
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
