import { IoCodeSlashSharp } from "react-icons/io5";
import { LuUserRoundPlus, LuUserRound, LuClock3 } from "react-icons/lu"
import { RiSuitcaseLine } from "react-icons/ri";

const Servicdetail = [
    {
        id: "1",
        icon: <LuUserRoundPlus />,
        img: "/it solution.jpeg",
        title: "Sourcing – Recruitments",
        description: ["Sourcing is also a sub-set of recruitment, which is proactively searching for the most talented candidates for a particular role. Outsourcing is a common technique where businesses contract out a business function, typically something non-critical such as payroll, to a third-party supplier. As part of the outsourcing process, businesses will draw up a list of potential third parties and choose the most appropriate for their needs."]
    },
    {
        id: "2",
        icon: <RiSuitcaseLine />,
        title: "Payroll Solutions",
        img: "/payroll.jpeg",
        descriptions: [
            "1. End to end processing of company payroll(s).",
            "2. Collect payroll information, Process, Produce, reports and files.",
            "3. Build a database of all employee.",
            "4. End of year Processing and reconciliation including payment summaries."
        ]
    },
    {
        id: "3",
        icon: <LuUserRound />,
        title: "Housekeeping",
        img: "/housekeeping.jpeg",
        descriptions: [
            "Housekeeping is the department deals essentially with cleanliness and all ancillary service attached to that.",
            "1. Dedicated Manpower.",
            "2. Floor, Window, Glass & Equipment Cleaning.",
            "3. Premises management - Hygienic atmosphere and develop comfortable ambiance."
        ]
    },
    {
        id: "4",
        icon: <LuClock3 />,
        title: "Tea Time Services",
        img: "/tea time.jpeg",
        descriptions: [
            "This service helps to reduce the company expenses where we provide a dedicated person who will make TEA, COFFEE, etc., and serve to employees, clients, customers at their respective locations, saving useful working hours."
        ]
    }
]
export default Servicdetail;
