import {
  MapPin,
  Clock,
  User,
  ExternalLink,
  BadgeCheck,
  Calendar,
} from "lucide-react";
import { events } from "../mockdata";

const Events = () => {
  return (
    <div className="py-20 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#027027]">
            Upcoming Events
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Leadership team guiding NIMA’s mission in advancing healthcare,
            collaboration, and community service.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-8">
          {events.slice(0, 3).map((event) => (
            <NimaEventCard
              key={event.title}
              title={event.title}
              speaker={event.speaker}
              speakerTitle={event.speakerTitle}
              timeRange={event.timeRange}
              timeNote={event.timeNote}
              venue={event.venue}
              address={event.address}
              city={event.city}
              day={event.day}
              month={event.month}
              year={event.year}
              image={event.image}
              onRegister={() => console.log("Register:", event.title)}
              onFindMore={() => console.log("Find more:", event.title)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            className="
      group
      inline-flex
      items-center
      gap-3
      border
      border-[#027027]
      text-[#027027]
      bg-transparent
      px-6 py-3
      rounded-lg
      font-semibold
      transition-all
      duration-200
      hover:bg-green-50
      hover:-translate-y-0.5
    "
          >
            <span>View All Events</span>

            <span className="border-l border-[#027027]/30 pl-3 flex items-center">
              <Calendar className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;

interface EventCardProps {
  image?: string;
  badge?: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  timeRange: string;
  timeNote: string;
  venue: string;
  address: string;
  city: string;
  mapUrl?: string;
  onRegister?: () => void;
  onFindMore?: () => void;
  day: number;
  month: string;
  year: number;
}

function NimaEventCard({
  image,
  badge = "SIGNATURE EVENT",
  title,
  speaker,
  speakerTitle,
  timeRange,
  timeNote,
  venue,
  address,
  city,
  mapUrl = "#",
  onRegister,
  onFindMore,
  day,
  month,
  year,
}: Partial<EventCardProps>) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* IMAGE SECTION */}
        <div className="relative md:col-span-1 h-64 md:h-full bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
              <MapPin className="w-10 h-10 mb-2" />
              <span className="text-sm">No Image Available</span>
            </div>
          )}

          {/* Date overlay */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-lg text-center shadow-sm">
            <p className="text-xl font-bold text-gray-900 leading-none">
              {day}
            </p>
            <p className="text-xs font-semibold text-[#027027] tracking-widest">
              {month}
            </p>
            <p className="text-[10px] text-gray-500">{year}</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="md:col-span-2 p-6 flex flex-col gap-4">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-[#027027]" />
            <span className="text-xs font-semibold text-[#027027] uppercase tracking-widest">
              {badge}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 leading-snug">
            {title}
          </h2>

          {/* Speaker */}
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <User className="w-4 h-4 mt-0.5" />
            <div>
              <span className="font-medium text-gray-800">{speaker}</span>
              <p className="text-xs text-gray-500">{speakerTitle}</p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>
              <span className="text-gray-800 font-medium">{timeRange}</span> —{" "}
              {timeNote}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 mt-0.5" />
            <div>
              <p>
                {venue}, {address}, {city}
              </p>

              <a
                href={mapUrl}
                className="inline-flex items-center gap-1 text-[#027027] text-xs mt-1 hover:underline"
              >
                View on map
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-2">
            <button
              onClick={onRegister}
              className="bg-[#027027] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#01551d] transition"
            >
              Register
            </button>

            <button
              onClick={onFindMore}
              className="border border-gray-300 text-gray-600 px-5 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
