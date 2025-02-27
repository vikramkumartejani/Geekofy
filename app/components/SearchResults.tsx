import { ServiceProvider } from "@/types";
import ServiceCard from "./ServiceCard";

interface SearchResultsProps {
  services: ServiceProvider[];
}

export function SearchResults({ services }: SearchResultsProps) {
  return (
    <div className="flex-1 p-4">
      <div className="space-y-4">
        {services.map((service) => (
          <ServiceCard
            onChatClick={() => {}}
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </div>
  );
}
