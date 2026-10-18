const keep = (name) => name.replaceAll(" ", "\u00A0")
const joinNames = (left, right) => `${keep(left)} & ${keep(right)}`

const groomHome = {
  address: "Cuchelim, Mapusa, Goa",
  mapsUrl: "https://maps.app.goo.gl/VsBxvprNnNXn8ABp9",
}

const brideHome = {
  address: "Khadpabandh, Ponda, Goa",
  mapsUrl: "https://maps.app.goo.gl/KLzUMdw5WPyye2Nz6",
}

export const invitationSide = import.meta.env.VITE_SIDE === "bride" ? "bride" : "groom"

export const wedding = {
  title: "Ashutosh & Niliksha's Wedding",
  envelope: {
    to: "",
    heading: "",
    names: "#Mog AshuNi",
    instruction: "Tap to Open Invitation",
  },
  blessing: "|| Shri Ganeshay Namah ||",
  ceremony: {
    dateLabel: "Thursday, 3rd December 2026",
    timeLabel: "at 10:53 AM",
    countdownIso: "2026-12-03T10:53:00+05:30",
  },
  sides: {
    groom: {
      hosts: joinNames("Mr. Ashok Salgaonkar", "Mrs. Ashwini Salgaonkar"),
      invite: "cordially invite you to the wedding ceremony of their son",
      first: "Ashutosh",
      second: "Niliksha",
      otherRelation: "daughter of",
      otherParents: joinNames("Mr. Shrikant Naik", "Mrs. Sheetal Naik"),
      haldi: {
        label: "Haldi",
        dateLabel: "Wednesday, 2nd December",
        timeLabel: "at 10:00 AM",
        ...groomHome,
      },
    },
    bride: {
      hosts: joinNames("Mr. Shrikant Naik", "Mrs. Sheetal Naik"),
      invite: "cordially invite you to the wedding ceremony of their daughter",
      first: "Niliksha",
      second: "Ashutosh",
      otherRelation: "son of",
      otherParents: joinNames("Mr. Ashok Salgaonkar", "Mrs. Ashwini Salgaonkar"),
      haldi: {
        label: "Haldi",
        dateLabel: "Tuesday, 1st December",
        timeLabel: "at 10:00 AM",
        ...brideHome,
      },
    },
  },
  venue: {
    label: "The Venue",
    name: "Shivtej Hall",
    address: "Opposite Azad Bhavan, Porvorim, Goa",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Shivtej+Hall+Opposite+Azad+Bhavan+Porvorim+Goa+403521",
  },
}

export const side = wedding.sides[invitationSide]
