export const siteCopy = {
  global: {
    name: "SeaSentry",
    tagline: "Satellite & AI Oil Spill Intelligence",
    aiMantra: "AI advises. Humans decide.",
    demoLabel: "DEMO / SIMULATED DATA",
    demoUrl: "https://seasentry.vercel.app/dashboard"
  },
  hero: {
    headline: "See the spill. Understand the risk. Act.",
    supporting: "Satellite intelligence and AI-assisted analysis for human-led oil spill response in the Caspian Sea.",
    primaryCta: "Explore the platform",
    secondaryCta: "How it works"
  },
  workflow: {
    title: "From Detection to Response",
    description: "Every confirmed spill moves through the same five stages, each leaving a record the next stage can build on.",
    steps: [
      {
        id: "1",
        title: "Detect",
        description: "Suspicious surface patterns flagged from satellite imagery.",
        color: "#7FA992", // sage green
        bgColor: "rgba(127,169,146,0.15)"
      },
      {
        id: "2",
        title: "Analyze",
        description: "Area, confidence and risk estimated by AI models.",
        color: "#8AB19D", // slightly lighter sage
        bgColor: "rgba(138,177,157,0.15)"
      },
      {
        id: "3",
        title: "Review",
        description: "A human operator confirms, rejects or escalates the event.",
        color: "#C69C6D", // golden/mustard
        bgColor: "rgba(198,156,109,0.15)"
      },
      {
        id: "4",
        title: "Sorbent Material",
        description: "Cotton-waste sorbent deployed to absorb the confirmed spill.",
        color: "#D96C5B", // terracotta/red
        bgColor: "rgba(217,108,91,0.15)"
      },
      {
        id: "5",
        title: "Track",
        description: "Status, affected area and response progress stay on record.",
        color: "#4A7C75", // deep teal
        bgColor: "rgba(74,124,117,0.15)"
      }
    ]
  },
  caspian: {
    title: "The Caspian Context",
    description: "Designed for monitoring the Caspian Sea.",
    bullets: [
      "Heavy oil & gas activity",
      "Dense maritime traffic corridors",
      "Sensitive coastal ecosystems"
    ]
  },
  intelligence: {
    ai: {
      title: "AI That Supports Decisions",
      description: "Reads imagery so analysts spend less time reviewing it manually.",
      pipeline: ""
    },
    satellite: {
      title: "Satellite Observation",
      description: "Raw image → detection → analysis → intelligence.",
      note: "Prototype integration"
    },
    vessel: {
      title: "Vessel Intelligence",
      description: "Nearby traffic gives investigators context. Never blame."
    }
  },
  problem: {
    title: "The science of recovery",
    description: "Detection is only the first step. Our laboratory engineers advanced sorbent materials designed to physically isolate, treat, and recycle oil."
  },
  response: {
    title: "Response Statuses",
    statuses: [
      { label: "New Incident", color: "text-status-red" },
      { label: "Under Review", color: "text-status-yellow" },
      { label: "Cleaning", color: "text-brand-primary" },
      { label: "Resolved", color: "text-gray-400" }
    ]
  },
  finalCta: {
    lines: ["See the spill.", "Understand the risk.", "Support the response."]
  },
  livePlatform: {
    title: "From Satellite Signal to Operational Intelligence",
    label: "Prototype",
    cta: "Explore the demo"
  }
};
