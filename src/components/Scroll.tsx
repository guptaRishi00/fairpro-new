import ScrollVelocity from "./ScrollVelocity";

export default function Scroll() {
  return (
    <div className="w-full bg-[#FFE0BA] pb-3">
      <ScrollVelocity
        texts={[
          "",
          "Join Us at LE MERIDIEN DUBAI HOTEL & CONFERENCE CENTRE, Dubai — 29–30 November 2025 |Your Gateway to Tamil Nadu’s Real Estate Future",
        ]}
        velocity={100}
        className="text-2xl text-[#81072C]"
      />
    </div>
  );
}
